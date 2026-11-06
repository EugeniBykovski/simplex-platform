import type { Locale } from "@/i18n/routing";

export type JobCopy = {
  meta: { title: string; description: string };
  title: string;
  team: string;
  location: string;
  type: string;
  /** Only with an approved band. */
  salary?: string;
  intro: string;
  responsibilities: readonly string[];
  requirements: readonly string[];
  niceToHave: readonly string[];
  howWeWork: string;
  hiringProcess: string;
};

export type JobPosition = {
  slug: string;
  /** Short reference shown in lists, such as ENG-01. */
  reference: string;
  /** A real, current, founder-approved vacancy. See docs/content/careers-positions-register.md. */
  copy: Record<Locale, JobCopy>;
};

/**
 * Live vacancies, and the only source of /careers/[slug] pages. It is deliberately empty: the six
 * roles in the design are marked "Sample listings · not live vacancies", so none is published. Add
 * an entry only for an approved role, with a way to apply.
 */
export const jobPositions: readonly JobPosition[] = [];
