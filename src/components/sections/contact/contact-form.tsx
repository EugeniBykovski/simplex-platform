"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useTransition,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Button, LinkButton } from "@/components/ui/button";
import { cx } from "@/components/ui/cx";
import { Alert } from "@/components/ui/feedback";
import { Checkbox, FieldError, Select, TextArea, TextField } from "@/components/ui/form";
import { Icon } from "@/components/ui/icon";
import { TextLink } from "@/components/ui/links";
import type { ContactCopy } from "@/content/contact";
import {
  BUDGET_IDS,
  emptyContactValues,
  FIELD_ORDER,
  HONEYPOT_FIELD,
  isEmailShaped,
  LIMITS,
  SERVICE_IDS,
  TIMELINE_IDS,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactFormState,
  type ContactValues,
} from "@/lib/contact/fields";

export type DeliveryMode = "live" | "demo" | "unavailable";

type FormProps = {
  action: (state: ContactFormState, form: FormData) => Promise<ContactFormState>;
  mode: DeliveryMode;
  privacyPublished: boolean;
  locale: string;
  copy: ContactCopy["form"];
  /** A service preselected from the link that opened the page, already checked by the server. */
  initialServices?: readonly string[];
};

const controlId = (field: ContactField) => (field === "services" ? "cf-services-0" : `cf-${field}`);

/** "Send another" starts from a fresh action state, so no earlier result lingers. */
export function ContactFormPanel(props: FormProps) {
  const [run, setRun] = useState(0);
  return <ContactForm key={run} {...props} onRestart={() => setRun((value) => value + 1)} />;
}

function ContactForm({
  action,
  mode,
  privacyPublished,
  locale,
  copy,
  initialServices = [],
  onRestart,
}: FormProps & { onRestart: () => void }) {
  const initialState: ContactFormState = {
    status: "idle",
    values: { ...emptyContactValues, services: [...initialServices] },
  };
  // `formAction` serves visitors without JavaScript, whose result arrives in the rendered page.
  const [formState, formAction] = useActionState(action, initialState);
  const [clientState, setClientState] = useState<ContactFormState | null>(null);
  const [pending, startTransition] = useTransition();
  const state = clientState ?? formState;
  const [values, setValues] = useState<ContactValues>(state.values);
  const [tried, setTried] = useState(false);
  const alertRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const check = validateContact(values);
  const liveErrors: ContactErrors = check.ok ? {} : check.errors;
  const errors: ContactErrors = tried
    ? liveErrors
    : state.status === "invalid"
      ? (state.errors ?? {})
      : {};
  const errorFields = FIELD_ORDER.filter((field) => errors[field]);

  // Moves focus to what changed, so keyboard and screen-reader users are not left behind.
  useEffect(() => {
    if (state.status === "accepted") successRef.current?.focus();
    else if (state.status === "invalid") focusField(state.errors);
    else if (state.status !== "idle") alertRef.current?.focus();
  }, [state]);

  if (state.status === "accepted") {
    const live = !state.simulated;
    const firstName = state.values.name.split(" ")[0];
    return (
      <div className="stack gap-5 min-h-[520px] justify-center" role="status">
        <span className="w-[64px] h-[64px] rounded-[20px] bg-[#070B2B] grid place-items-center text-[#9DB4CC]">
          <Icon name="check" className="[--icon:28px]" />
        </span>
        <h2
          className="t-h2 outline-none [overflow-wrap:anywhere] [&:lang(ru)]:hyphens-auto"
          ref={successRef}
          tabIndex={-1}
        >
          {live
            ? copy.success.live.title.replace("{name}", firstName ? `, ${firstName}` : "")
            : copy.success.demo.title}
        </h2>
        <p className="t-lead text-text [overflow-wrap:anywhere]">
          {live ? (
            <>
              {copy.success.live.body} <b>{state.values.email}</b>.
            </>
          ) : (
            copy.success.demo.body
          )}
        </p>
        <div className="wrap-row gap-3">
          <LinkButton href="/contact/thank-you" arrow>
            {copy.success.continue}
          </LinkButton>
          <Button variant="ghost" onClick={onRestart}>
            {live ? copy.success.again : copy.success.startOver}
          </Button>
        </div>
      </div>
    );
  }

  const unavailable = mode === "unavailable" || state.status === "unavailable";
  const locked = pending || unavailable;
  const failed = state.status === "network_failure" || state.status === "provider_failure";

  const update =
    <K extends keyof ContactValues>(key: K) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const next = (
        event.target instanceof HTMLInputElement && event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
      ) as ContactValues[K];
      setValues((current) => ({ ...current, [key]: next }));
    };

  const toggleService = (id: string, on: boolean) =>
    setValues((current) => ({
      ...current,
      services: on
        ? [...current.services, id]
        : current.services.filter((service) => service !== id),
    }));

  // Calls the action directly for two reasons. React resets selects and checkboxes after an action it
  // started, which would lose input. And a dropped connection throws here, where it can become an
  // honest "couldn't confirm" rather than an error page. It is never retried automatically.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!check.ok) {
      setTried(true);
      focusField(check.errors);
      return;
    }
    setTried(false);
    const data = new FormData(event.currentTarget);
    startTransition(async () => {
      try {
        setClientState(await action(state, data));
      } catch {
        setClientState({ status: "network_failure", values });
      }
    });
  };

  const errorText = (field: ContactField) => {
    const code = errors[field];
    if (!code) return undefined;
    const messages: Partial<Record<string, string>> = copy.errors[field] ?? {};
    return messages[code] ?? copy.errors.generic;
  };

  const plural = new Intl.PluralRules(locale).select(errorFields.length);
  const summary = (copy.summary.counts[plural] ?? copy.summary.counts.other ?? "").replace(
    "{count}",
    String(errorFields.length),
  );

  const statusCopy =
    state.status === "rejected" ||
    state.status === "rate_limited" ||
    state.status === "network_failure" ||
    state.status === "provider_failure"
      ? copy.status[state.status]
      : null;

  return (
    <form
      action={formAction}
      onSubmit={onSubmit}
      noValidate
      className="stack gap-6 relative scroll-mt-[120px] [&_input]:scroll-mt-[120px] [&_select]:scroll-mt-[120px] [&_textarea]:scroll-mt-[120px]"
      id="contact-form"
    >
      <div className="stack gap-2">
        <h2 className="t-h3">{copy.title}</h2>
        <p className="t-small">{copy.note}</p>
      </div>

      {mode === "demo" ? (
        <Alert tone="info">
          <b>{copy.status.demo.title}</b> {copy.status.demo.body}
        </Alert>
      ) : null}

      <div
        ref={alertRef}
        tabIndex={-1}
        className="stack gap-3 outline-none empty:hidden scroll-mt-[120px]"
      >
        {unavailable ? (
          <Alert tone={state.status === "unavailable" ? "error" : "info"}>
            <b>{copy.status.unavailable.title}</b> {copy.status.unavailable.body}
          </Alert>
        ) : null}
        {errorFields.length > 0 ? (
          <Alert tone="error">
            <b>{summary}</b> {copy.summary.detail}
          </Alert>
        ) : statusCopy ? (
          <Alert tone="error">
            <b>{statusCopy.title}</b> {statusCopy.body}
          </Alert>
        ) : null}
      </div>
      <p className="sr-only" role="status">
        {pending ? copy.status.sending : ""}
      </p>

      <fieldset className="stack gap-3 border-0 p-[0] m-[0]">
        <legend className="label mb-[12px]">
          {copy.services.legend} <span className="opt">{copy.services.hint}</span>
        </legend>
        <div className="wrap-row gap-2">
          {SERVICE_IDS.map((id, position) => {
            const on = values.services.includes(id);
            return (
              <label
                key={id}
                className={cx(
                  "toggle-chip relative cursor-pointer has-[:focus-visible]:[outline:2px_solid_var(--signal)] has-[:focus-visible]:[outline-offset:3px] has-[:checked]:[background:var(--ink)] has-[:checked]:text-white has-[:checked]:border-[var(--ink)]",
                  on && "is-on",
                  locked && "opacity-[.6] cursor-not-allowed",
                )}
              >
                <input
                  className="sr-only"
                  id={`cf-services-${position}`}
                  type="checkbox"
                  name="services"
                  value={id}
                  checked={on}
                  disabled={locked}
                  onChange={(event) => toggleService(id, event.target.checked)}
                />
                {on ? <Icon name="check" /> : null}
                {copy.services.options[id]}
              </label>
            );
          })}
        </div>
        {errors.services ? <FieldError>{errorText("services")}</FieldError> : null}
      </fieldset>

      <div className="grid-2 [--gap:18px]">
        <TextField
          id="cf-name"
          name="name"
          label={copy.name.label}
          placeholder={copy.name.placeholder}
          autoComplete="name"
          required
          maxLength={LIMITS.name}
          value={values.name}
          onChange={update("name")}
          disabled={locked}
          error={errorText("name")}
        />
        <TextField
          id="cf-email"
          name="email"
          type="email"
          label={copy.email.label}
          placeholder={copy.email.placeholder}
          autoComplete="email"
          required
          maxLength={LIMITS.email}
          value={values.email}
          onChange={update("email")}
          disabled={locked}
          valid={isEmailShaped(values.email.trim())}
          error={errorText("email")}
        />
      </div>
      <TextField
        id="cf-company"
        name="company"
        label={copy.company.label}
        hint={copy.optional}
        placeholder={copy.company.placeholder}
        autoComplete="organization"
        maxLength={LIMITS.company}
        value={values.company}
        onChange={update("company")}
        disabled={locked}
        error={errorText("company")}
      />
      <TextArea
        id="cf-description"
        name="description"
        label={copy.description.label}
        hint={`${values.description.length} / ${LIMITS.descriptionMax}`}
        placeholder={copy.description.placeholder}
        required
        maxLength={LIMITS.descriptionMax}
        value={values.description}
        onChange={update("description")}
        disabled={locked}
        error={errorText("description")}
      />
      <div className="grid-2 [--gap:18px]">
        <Select
          id="cf-budget"
          name="budget"
          label={copy.budget.label}
          hint={copy.optional}
          value={values.budget}
          onChange={update("budget")}
          disabled={locked}
          error={errorText("budget")}
        >
          {BUDGET_IDS.map((id) => (
            <option key={id} value={id}>
              {copy.budget.options[id]}
            </option>
          ))}
        </Select>
        <Select
          id="cf-timeline"
          name="timeline"
          label={copy.timeline.label}
          hint={copy.optional}
          value={values.timeline}
          onChange={update("timeline")}
          disabled={locked}
          error={errorText("timeline")}
        >
          {TIMELINE_IDS.map((id) => (
            <option key={id} value={id}>
              {copy.timeline.options[id]}
            </option>
          ))}
        </Select>
      </div>

      <div className="stack gap-3">
        <Checkbox
          id="cf-consent"
          name="consent"
          value="yes"
          label={copy.consent}
          required
          checked={values.consent}
          onChange={update("consent")}
          disabled={locked}
          error={errorText("consent")}
        />
        <p className="t-xs">
          {copy.disclosure}{" "}
          {privacyPublished ? (
            <TextLink href="/privacy-policy">{copy.privacyLink}</TextLink>
          ) : (
            copy.privacyPending
          )}
        </p>
      </div>

      {/* For bots only: off-screen, out of the tab order, hidden from assistive technology. */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-[0] w-[1px] h-[1px] overflow-hidden"
      >
        <label htmlFor="cf-website">{copy.honeypot}</label>
        <input id="cf-website" type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="row between gap-4 stack-sm">
        <Button
          type="submit"
          size="lg"
          arrow={!unavailable}
          loading={pending}
          loadingLabel={copy.submit.pending}
          disabled={unavailable}
        >
          {unavailable
            ? copy.submit.unavailable
            : mode === "demo"
              ? copy.submit.demo
              : failed
                ? copy.submit.retry
                : copy.submit.idle}
        </Button>
        <span className="t-xs">{copy.noLists}</span>
      </div>
    </form>
  );
}

function focusField(errors: ContactErrors | undefined) {
  const first = FIELD_ORDER.find((field) => errors?.[field]);
  if (first) document.getElementById(controlId(first))?.focus();
}
