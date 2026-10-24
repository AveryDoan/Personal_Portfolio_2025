"use client";

import { useId, useState } from "react";

const SUBJECT = "Hello from your portfolio";

/**
 * One field that opens the visitor's email app with their message ready to send.
 * There is no form backend; without script the form submits straight to a mailto link.
 */
export function MailPrompt({ email }: { email: string }) {
  const id = useId();
  const [message, setMessage] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = message.trim() || "Hi Avery,";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form action={`mailto:${email}`} method="get" onSubmit={onSubmit} className="space-y-4">
      <input type="hidden" name="subject" value={SUBJECT} />
      <label htmlFor={id} className="block text-lead">
        <span className="block text-field-soft">Hiring for reporting and analytics?</span>
        <span className="block text-field-ink">Tell me what you need.</span>
      </label>
      <div className="space-y-3">
        <input
          id={id}
          name="body"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="A role, a dashboard, a question"
          autoComplete="off"
          className="h-16 w-full bg-paper px-5 text-body text-ink placeholder:text-soft"
        />
        <button type="submit" className="btn">
          Write the email
        </button>
      </div>
      <p className="text-small text-field-soft">
        This opens your email app with the message ready to send to {email}.
      </p>
    </form>
  );
}
