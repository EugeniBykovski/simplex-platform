import "server-only";
import { createHash, randomBytes } from "node:crypto";

const WINDOW_MS = 10 * 60 * 1000;
const PER_CLIENT = 5;
const PER_INSTANCE = 60;
const MAX_TRACKED = 5000;

// Clients are kept only as salted hashes, and the salt dies with the process.
const salt = randomBytes(16);
const clients = new Map<string, number[]>();
let recent: number[] = [];

/**
 * A cheap extra layer, NOT the production control: on serverless hosting each instance has its own
 * memory and counts reset on cold starts. Going live also requires rate limiting at the edge. See
 * the activation procedure in docs/architecture/contact-and-email.md.
 */
export function takeRateLimit(clientAddress: string, now = Date.now()): boolean {
  const since = now - WINDOW_MS;
  recent = recent.filter((time) => time > since);
  if (recent.length >= PER_INSTANCE) return false;

  const key = createHash("sha256").update(salt).update(clientAddress).digest("base64url");
  const attempts = (clients.get(key) ?? []).filter((time) => time > since);
  if (attempts.length >= PER_CLIENT) return false;

  if (clients.size >= MAX_TRACKED) {
    for (const [other, times] of clients) {
      if (times.every((time) => time <= since)) clients.delete(other);
    }
    if (clients.size >= MAX_TRACKED) return false;
  }

  clients.set(key, [...attempts, now]);
  recent.push(now);
  return true;
}
