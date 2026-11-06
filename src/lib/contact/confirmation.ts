import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

export const CONFIRMATION_COOKIE = "contact_confirmation";
export const CONFIRMATION_TTL_SECONDS = 15 * 60;

type Mode = "live" | "demo";

const sign = (payload: string, secret: string) =>
  createHmac("sha256", secret).update(`contact-confirmation:${payload}`).digest("base64url");

/** Holds a mode and a time, and nothing about the visitor or their message. */
export function issueConfirmation(mode: Mode, secret: string, now = Date.now()): string {
  const payload = `${mode}.${now}`;
  return `${payload}.${sign(payload, secret)}`;
}

/** True only for an unexpired value this deployment signed for this mode. */
export function verifyConfirmation(
  value: string | undefined,
  mode: Mode,
  secret: string,
  now = Date.now(),
): boolean {
  const [claimed, issued, signature, ...extra] = value?.split(".") ?? [];
  if (claimed !== mode || !issued || !signature || extra.length > 0) return false;

  const expected = Buffer.from(sign(`${claimed}.${issued}`, secret));
  const given = Buffer.from(signature);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false;

  const age = now - Number(issued);
  return age >= 0 && age <= CONFIRMATION_TTL_SECONDS * 1000;
}
