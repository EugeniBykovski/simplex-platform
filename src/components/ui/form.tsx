import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cx } from "./cx";
import { Icon } from "./icon";

type FieldProps = {
  /** Links the label, help and error to the control. */
  id: string;
  label: ReactNode;
  /** Shown beside the label, for example "Optional" or a character count. */
  hint?: ReactNode;
  help?: ReactNode;
  error?: ReactNode;
  valid?: boolean;
  fieldClassName?: string | undefined;
};

const describedBy = ({ id, help, error }: Pick<FieldProps, "id" | "help" | "error">) =>
  error ? `${id}-error` : help ? `${id}-help` : undefined;

function Field({
  id,
  label,
  hint,
  help,
  error,
  valid,
  fieldClassName,
  children,
}: FieldProps & { children: ReactNode }) {
  return (
    <div className={cx("field", error ? "is-error" : valid && "is-valid", fieldClassName)}>
      <label className="label" htmlFor={id}>
        {label}
        {hint ? <span className="opt">{hint}</span> : null}
      </label>
      {children}
      {help && !error ? (
        <p className="help" id={`${id}-help`}>
          {help}
        </p>
      ) : null}
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </div>
  );
}

export function FieldError({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p className="error-msg" id={id}>
      <Icon name="alert" />
      {children}
    </p>
  );
}

const controlProps = (props: Pick<FieldProps, "id" | "help" | "error">) => ({
  id: props.id,
  "aria-invalid": props.error ? (true as const) : undefined,
  "aria-describedby": describedBy(props),
});

export function TextField({
  id,
  label,
  hint,
  help,
  error,
  valid,
  fieldClassName,
  type = "text",
  className,
  ...rest
}: FieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field {...{ id, label, hint, help, error, fieldClassName }} valid={Boolean(valid)}>
      <input
        {...rest}
        {...controlProps({ id, help, error })}
        type={type}
        className={cx("input", className)}
      />
    </Field>
  );
}

export function TextArea({
  id,
  label,
  hint,
  help,
  error,
  valid,
  fieldClassName,
  className,
  ...rest
}: FieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Field {...{ id, label, hint, help, error, fieldClassName }} valid={Boolean(valid)}>
      <textarea
        {...rest}
        {...controlProps({ id, help, error })}
        className={cx("textarea", className)}
      />
    </Field>
  );
}

export function Select({
  id,
  label,
  hint,
  help,
  error,
  valid,
  fieldClassName,
  className,
  children,
  ...rest
}: FieldProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Field {...{ id, label, hint, help, error, fieldClassName }} valid={Boolean(valid)}>
      <select {...rest} {...controlProps({ id, help, error })} className={cx("select", className)}>
        {children}
      </select>
    </Field>
  );
}

export function Checkbox({
  label,
  error,
  id,
  className,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  id: string;
  label: ReactNode;
  error?: ReactNode;
}) {
  return (
    <div className="stack gap-2">
      <label className={cx("check", Boolean(error) && "is-error", className)}>
        <input
          {...rest}
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        <span>{label}</span>
      </label>
      {error ? <FieldError id={`${id}-error`}>{error}</FieldError> : null}
    </div>
  );
}

/** A required error summary at the top of a form. */
export function FormError({ children }: { children: ReactNode }) {
  return (
    <div className="alert alert-error" role="alert">
      <Icon name="alert" />
      <span>{children}</span>
    </div>
  );
}

export function SearchField({
  id,
  label,
  className,
  ...rest
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & { id: string; label: string }) {
  return (
    <div className={cx("search", className)}>
      <Icon name="search" />
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input {...rest} id={id} type="search" className="input" />
    </div>
  );
}
