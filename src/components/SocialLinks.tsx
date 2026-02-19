type SocialLink = {
  id: string;
  platform: string;
  url: string;
};

export default function SocialLinks({ links = [] }: { links: SocialLink[] }) {
  if (!links.length) return null;

  return (
    <section className="p-6 bg-white/5 rounded-xl border border-white/10">
      <h2 className="text-2xl font-semibold mb-4 text-sky-400">
        Social Links
      </h2>

      <div className="flex gap-4 flex-wrap">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            className="text-sky-300 hover:underline"
          >
            {link.platform}
          </a>
        ))}
      </div>
    </section>
  );
}
