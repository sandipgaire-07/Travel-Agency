import Input from "./Input";

function ContactForm() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-md" data-aos="fade-up">
      <p className="text-center text-2xl font-bold text-slate-900">
        Send Us a Message
      </p>

      <p className="mt-2 text-center text-slate-600">
        Please fill out the form below. We'll get back to you as soon as possible.
      </p>

      <form className="mt-8 grid gap-4 md:grid-cols-2">
        <Input
          type="text"
          placeholder="Your Name"
        />

        <Input
          type="email"
          placeholder="Your Email"
        />

        <Input
          type="text"
          placeholder="Subject"
        />

        <Input
          type="tel"
          placeholder="Phone Number"
        />

        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 md:col-span-2"
        />

        <button
          type="submit"
          className="rounded-lg bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700 md:col-span-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;