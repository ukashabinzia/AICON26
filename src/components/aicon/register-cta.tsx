import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type FormState = "idle" | "loading" | "success";

interface FormErrors {
  fullName?: string | undefined;
  email?: string | undefined;
  studentId?: string | undefined;
  interest?: string | undefined;
}

const INTEREST_OPTIONS = [
  "AI / Machine Learning",
  "Competitive Programming",
  "Startup / Entrepreneurship",
  "Web / App Development",
  "Data Science",
  "Other",
];

export function RegisterCta() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(form: FormData): FormErrors {
    const errs: FormErrors = {};
    const name = (form.get("fullName") as string | null)?.trim() ?? "";
    const email = (form.get("email") as string | null)?.trim() ?? "";
    const studentId = (form.get("studentId") as string | null)?.trim() ?? "";
    const interest = (form.get("interest") as string | null) ?? "";

    if (!name || name.length < 2) errs.fullName = "Please enter your full name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!studentId || studentId.length < 3) errs.studentId = "Please enter your student ID.";
    if (!interest) errs.interest = "Please select an area of interest.";
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (
      validationErrors.fullName ||
      validationErrors.email ||
      validationErrors.studentId ||
      validationErrors.interest
    ) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setState("loading");

    // Simulate network delay — frontend demonstration only
    setTimeout(() => setState("success"), 1200);
  }

  return (
    <section
      id="register"
      className="relative overflow-hidden bg-[var(--ink)] py-20 text-[var(--bone)] sm:py-28"
    >
      {/* Background geometry — subtle */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-[520px] w-[340px] -skew-x-[28deg] bg-[var(--blue)] opacity-30" />
        <div className="absolute -right-24 -bottom-40 h-[420px] w-[260px] -skew-x-[28deg] bg-[var(--deep-red)] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left: headline */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-balance-tight font-display text-[clamp(2.4rem,7vw,5rem)] font-bold uppercase">
                Ready to build
                <br />
                what&rsquo;s next?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-base leading-relaxed text-[var(--bone)]/65">
                Step into three days of AI, coding, startups and innovation at SEECS, NUST.
              </p>
              <p className="label-mono mt-6 text-[var(--bone)]/35">
                Frontend demonstration &mdash; no data is submitted.
              </p>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6 lg:col-start-7">
            {state === "success" ? (
              <Reveal>
                <div className="flex flex-col items-center justify-center border border-[color-mix(in_oklab,var(--bone)_15%,transparent)] px-8 py-16 text-center sm:py-20">
                  <CheckCircle className="h-12 w-12 text-[var(--signal)]" />
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight uppercase">
                    You&rsquo;re in.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-[var(--bone)]/65">
                    This is a frontend demonstration. In a live environment, your registration would
                    be confirmed via email.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={120}>
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  <FormField
                    label="Full Name"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    error={errors.fullName}
                    disabled={state === "loading"}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    error={errors.email}
                    disabled={state === "loading"}
                  />
                  <FormField
                    label="Student ID"
                    name="studentId"
                    type="text"
                    placeholder="e.g. 2024-CS-123"
                    error={errors.studentId}
                    disabled={state === "loading"}
                  />

                  {/* Select */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="label-mono mb-2 block text-[var(--bone)]/60"
                    >
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      disabled={state === "loading"}
                      className={cn(
                        "w-full appearance-none border bg-transparent px-4 py-3.5 font-display text-sm text-[var(--bone)] transition-colors duration-300 focus:border-[var(--signal)] focus:outline-none disabled:opacity-50",
                        errors.interest
                          ? "border-[var(--deep-red)]"
                          : "border-[color-mix(in_oklab,var(--bone)_25%,transparent)]",
                      )}
                      defaultValue=""
                    >
                      <option value="" disabled className="text-[var(--ink)]">
                        Select an area
                      </option>
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="text-[var(--ink)]">
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="mt-1.5 text-xs text-[var(--deep-red)]" role="alert">
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="group focus-visible:ring-ring relative mt-2 inline-flex items-center justify-center gap-4 overflow-hidden bg-[var(--signal)] px-8 py-5 font-display text-sm font-bold tracking-[0.18em] text-[var(--ink)] uppercase transition-transform duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-70"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 origin-left scale-x-0 bg-[var(--blue)] transition-transform duration-500 group-hover:scale-x-100"
                    />
                    <span className="relative flex items-center gap-3 group-hover:text-[var(--bone)]">
                      {state === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting&hellip;
                        </>
                      ) : (
                        <>
                          Register now
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Reusable form field ─── */

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  error?: string | undefined;
  disabled?: boolean | undefined;
}

function FormField({ label, name, type, placeholder, error, disabled }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="label-mono mb-2 block text-[var(--bone)]/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "w-full border bg-transparent px-4 py-3.5 font-display text-sm text-[var(--bone)] transition-colors duration-300 placeholder:text-[var(--bone)]/25 focus:border-[var(--signal)] focus:outline-none disabled:opacity-50",
          error
            ? "border-[var(--deep-red)]"
            : "border-[color-mix(in_oklab,var(--bone)_25%,transparent)]",
        )}
      />
      {error && (
        <p className="mt-1.5 text-xs text-[var(--deep-red)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
