import "server-only";
import type { EmailMessage, EmailProvider, SendResult } from "./provider";

const ENDPOINT = "https://api.resend.com/emails";
const TIMEOUT_MS = 10_000;

/**
 * Real delivery over Resend's HTTP API, with no added dependency. Not yet exercised against Resend:
 * docs/architecture/contact-and-email.md has the activation procedure. A success means Resend
 * accepted the message, not that it arrived.
 */
export class ResendEmailProvider implements EmailProvider {
  readonly name = "resend";

  constructor(private readonly apiKey: string) {}

  async send({ from, to, replyTo, subject, text, html }: EmailMessage): Promise<SendResult> {
    let response: Response;
    try {
      response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text, html }),
        cache: "no-store",
        signal: AbortSignal.timeout(TIMEOUT_MS),
      });
    } catch {
      return { ok: false, failure: "network" };
    }

    if (response.status === 429) return { ok: false, failure: "rate_limited" };
    if (response.status >= 500) return { ok: false, failure: "provider" };
    if (!response.ok) return { ok: false, failure: "configuration" };

    const body: unknown = await response.json().catch(() => null);
    const id = (body as { id?: unknown } | null)?.id;
    // Accepted, as far as the status says, but unconfirmed. Treated as ambiguous.
    if (typeof id !== "string") return { ok: false, failure: "network" };
    return { ok: true, id, simulated: false };
  }
}
