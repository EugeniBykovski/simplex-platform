/** Sender and recipient always come from server configuration, never from form data. */
export type EmailMessage = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
};

/**
 * "network" is ambiguous: the provider may have accepted the message. It is never retried
 * automatically, because that could send a duplicate.
 */
export type SendFailure = "rate_limited" | "provider" | "network" | "configuration";

export type SendResult =
  { ok: true; id: string; simulated: boolean } | { ok: false; failure: SendFailure };

export interface EmailProvider {
  readonly name: "mock" | "resend";
  send(message: EmailMessage): Promise<SendResult>;
}
