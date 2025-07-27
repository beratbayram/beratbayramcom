import { BrWIP } from "@/lib/components/BrWIP";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Contact</h1>
      <BrWIP
        title="Work in Progress"
        description="I'm currently building a contact form. In the meantime, feel free to reach out to me directly through my social media channels!"
      />
    </div>
  );
}
