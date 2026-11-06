import "server-only";
import type { EmailMessage, EmailProvider, SendFailure, SendResult } from "./provider";

/** Reply-to addresses that force an outcome, so every state can be reached in manual QA. */
const SIMULATED_FAILURES: Readonly<Record<string, SendFailure>> = {
  "qa+rate-limited@example.test": "rate_limited",
  "qa+provider-failure@example.test": "provider",
  "qa+network-failure@example.test": "network",
  "qa+configuration@example.test": "configuration",
};
const SLOW_ADDRESS = "qa+slow@example.test";

/**
 * Local development only: see resolveDelivery. Sends nothing, writes nothing and keeps nothing, and
 * its result always says it was simulated.
 */
export class MockEmailProvider implements EmailProvider {
  readonly name = "mock";

  async send({ replyTo }: EmailMessage): Promise<SendResult> {
    if (replyTo === SLOW_ADDRESS) await new Promise((done) => setTimeout(done, 1500));
    const failure = SIMULATED_FAILURES[replyTo];
    return failure
      ? { ok: false, failure }
      : { ok: true, id: `simulated-${crypto.randomUUID()}`, simulated: true };
  }
}
