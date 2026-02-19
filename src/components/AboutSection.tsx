interface AboutSectionProps {
  bio: string;
}

export default function AboutSection({ bio }: AboutSectionProps) {
  return (
    <section className="p-6 bg-[var(--card)] rounded-xl shadow-lg border border-white/10">
      <h2 className="text-2xl font-semibold text-[var(--accent)] mb-2">About</h2>
      <p className="text-[var(--text)] leading-relaxed">{bio}</p>
    </section>
  );
}
