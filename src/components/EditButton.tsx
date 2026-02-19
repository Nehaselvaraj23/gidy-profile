interface EditButtonProps {
  onClick: () => void;
}

export default function EditButton({ onClick }: EditButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-12 right-12 fade-up bg-[var(--accent)] text-black px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
    >
      Edit Profile
    </button>
  );
}
