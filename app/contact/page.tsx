export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold">Contact</h1>
      <p className="mb-6 text-lg text-gray-700">
        Feel free to reach out via email at{" "}
        <a href="mailto:hello@example.com" className="text-blue-600 underline">
          hello@example.com
        </a>
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded border border-gray-300 px-3 py-2"
        />
        <textarea
          placeholder="Your Message"
          className="w-full rounded border border-gray-300 px-3 py-2"
          rows={4}
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
}
