import "server-only";

type Detail = string | undefined;

/**
 * The only logging on the contact path, and its arguments cannot carry form content. Never add a
 * name, an email address, message text, an IP address or a key.
 */
export function logContactEvent(
  event: string,
  correlation: string,
  detail: { reason?: Detail; provider?: Detail; messageId?: Detail; errorName?: Detail } = {},
): void {
  console.info(JSON.stringify({ scope: "contact", event, correlation, ...detail }));
}
