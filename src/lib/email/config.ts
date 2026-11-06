import "server-only";
import { parseEmailEnv, type EmailEnv } from "@/config/env";

/** Importing this from a Client Component fails the build. */
export function getEmailConfig(): EmailEnv {
  return parseEmailEnv(process.env);
}
