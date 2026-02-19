"use client";

export default function ProfileHeader({ profile }: { profile: any }) {
  return (
    <div className="text-center space-y-6 mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto">
      <div className="w-24 h-24 sm:w-32 lg:w-40 mx-auto bg-gradient-to-br from-[#38bdf8] via-[#6366f1] to-[#22c55e] rounded-3xl shadow-2xl border-4 border-white/20" />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#38bdf8] via-white to-[#6366f1] bg-clip-text text-transparent leading-tight">
        {profile.name}
      </h1>
      <div className="px-6 sm:px-8 py-3 lg:py-4 rounded-2xl border border-white/10 inline-block bg-[var(--card)]">
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#38bdf8]">
          {profile.title}
        </p>
      </div>
    </div>
  );
}
