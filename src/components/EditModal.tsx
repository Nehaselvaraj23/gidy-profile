import { FormEvent } from "react";

interface FormData {
  name: string;
  title: string;
  bio: string;
  skills: string;
}

interface EditModalProps {
  open: boolean;
  form: FormData;
  onClose: () => void;
  onSave: () => void;
  onChange: (form: FormData) => void;
}

export default function EditModal({ open, form, onClose, onSave, onChange }: EditModalProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({ ...form, [e.target.name]: e.target.value });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[var(--card)] border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4 fade-up">
        <h3 className="text-lg font-semibold text-center text-[var(--accent)]">Edit Profile</h3>

        <input name="name" className="form-input" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="title" className="form-input" placeholder="Title" value={form.title} onChange={handleChange} />
        <textarea name="bio" className="form-input" rows={3} placeholder="About" value={form.bio} onChange={handleChange} />
        <input name="skills" className="form-input" placeholder="Skills (comma separated)" value={form.skills} onChange={handleChange} />

        <div className="flex justify-center gap-3 pt-3">
          <button onClick={onClose} className="px-6 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all">Cancel</button>
          <button onClick={onSave} className="px-6 py-2 bg-[var(--accent)] text-black rounded-xl font-semibold hover:shadow-xl transition-all">Save</button>
        </div>
      </div>
    </div>
  );
}
