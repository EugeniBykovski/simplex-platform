import type { Locale } from "@/i18n/routing";
import type common from "@/i18n/messages/en/common.json";
import type errors from "@/i18n/messages/en/errors.json";
import type footer from "@/i18n/messages/en/footer.json";
import type forms from "@/i18n/messages/en/forms.json";
import type listings from "@/i18n/messages/en/listings.json";
import type nav from "@/i18n/messages/en/nav.json";

declare module "next-intl" {
  interface AppConfig {
    Locale: Locale;
    Messages: {
      common: typeof common;
      errors: typeof errors;
      footer: typeof footer;
      forms: typeof forms;
      listings: typeof listings;
      nav: typeof nav;
    };
  }
}
