import "server-only";
import { parseEmailEnv, type EmailEnv } from "@/config/env";

/** Importing this from a Client Component fails the build. Call it where email is sent (SF-151). */
export function getEmailConfig(): EmailEnv {
  return parseEmailEnv(process.env);
}
