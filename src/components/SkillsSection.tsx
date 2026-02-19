export default function SkillsSection({ skills }: { skills: string[] }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h2 className="text-2xl font-semibold mb-4 text-sky-400">Skills</h2>

      <p className="text-gray-200">
        {skills.join(", ")}
      </p>
    </section>
  );
}

