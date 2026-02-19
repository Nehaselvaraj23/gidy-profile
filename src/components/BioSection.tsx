export default function BioSection({ bio }: { bio: string }) {
  return (
    <div className="bg-[var(--card)] rounded-3xl p-8 lg:p-10 border border-white/10 shadow-2xl">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#38bdf8] mb-6 flex items-center">
        <span className="w-10 h-10 bg-[#38bdf8]/20 rounded-2xl flex items-center justify-center mr-4 text-xl">👋</span>
        About
      </h2>
      <p className="text-lg sm:text-xl leading-relaxed text-gray-300 max-w-2xl">{bio}</p>
    </div>
  );
}


