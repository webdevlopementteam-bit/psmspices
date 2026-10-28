"use client";

import { contact } from "../data";

const field =
  "h-10 w-full border border-[#e1e8ed] bg-white px-3 text-[15px] text-heading outline-none focus:border-brand";
const label = "mb-1 block text-[15px] font-semibold text-heading";

// No backend: submitting opens the visitor's mail client with the message pre-filled.
export default function ContactForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get("first")} ${data.get("last")}`.trim();
    const body = [
      `Name: ${name}`,
      `Email: ${data.get("email")}`,
      `Mobile: ${data.get("mobile")}`,
      "",
      data.get("message"),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <fieldset>
        <legend className={label}>
          Name <span className="text-[#d63637]">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-4">
          <label>
            <input name="first" required className={field} />
            <span className="mt-1 block text-[13px]">First</span>
          </label>
          <label>
            <input name="last" className={field} />
            <span className="mt-1 block text-[13px]">Last</span>
          </label>
        </div>
      </fieldset>

      <label className="block">
        <span className={label}>
          Email <span className="text-[#d63637]">*</span>
        </span>
        <input type="email" name="email" required className={field} />
      </label>

      <label className="block">
        <span className={label}>
          Mobile <span className="text-[#d63637]">*</span>
        </span>
        <input type="tel" name="mobile" required className={field} />
      </label>

      <label className="block">
        <span className={label}>Message</span>
        <textarea name="message" rows={6} className={`${field} h-[170px] py-2`} />
      </label>

      <button
        type="submit"
        className="min-h-10 bg-brand px-5 text-[15px] font-medium text-white transition-colors hover:bg-[#662900]"
      >
        Submit
      </button>
    </form>
  );
}
