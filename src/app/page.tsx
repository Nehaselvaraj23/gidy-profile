"use client";

import { useEffect, useState } from "react";
import ProfileHeader from "@/components/ProfileHeader";
import BioSection from "@/components/BioSection";
import SkillsSection from "@/components/SkillsSection";
import SocialLinks from "@/components/SocialLinks";
import EditModal from "@/components/EditModal";
import EditButton from "@/components/EditButton";

type Skill = {
  id: string;
  name: string;
};

type SocialLink = {
  id: string;
  platform: string;
  url: string;
};

type Profile = {
  name: string;
  title: string;
  bio: string;
  skills: Skill[];
  socialLinks: SocialLink[];
};

export default function Page() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    title: "",
    bio: "",
    skills: "",
  });

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);

        setForm({
          name: data.name || "",
          title: data.title || "",
          bio: data.bio || "",
          skills: Array.isArray(data.skills)
            ? data.skills.map((s: Skill) => s.name).join(", ")
            : "",
        });
      });
  }, []);
  const saveProfile = async () => {
    const updatedSkills = form.skills
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        title: form.title,
        bio: form.bio,
        skills: updatedSkills,
      }),
    });

    setProfile({
      ...profile!,
      name: form.name,
      title: form.title,
      bio: form.bio,
      skills: updatedSkills.map((skill) => ({
        id: crypto.randomUUID(),
        name: skill,
      })),
    });

    setEditOpen(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  if (!profile) return null;

  return (
    <main className="min-h-screen px-6 py-16 flex justify-center bg-gradient-to-br from-[#020617] to-[#0f172a] text-white">
      <div className="w-full max-w-3xl space-y-12">
        <ProfileHeader profile={profile} />
        <BioSection bio={profile.bio} />
        <SkillsSection skills={profile.skills.map((s) => s.name)} />
        <SocialLinks links={profile.socialLinks || []} />
      </div>

      {success && (
        <div className="fixed top-6 right-6 bg-green-500 text-black px-5 py-2 rounded-xl shadow-lg">
          Profile updated successfully
        </div>
      )}

      <EditButton onClick={() => setEditOpen(true)} />

      {editOpen && (
        <EditModal
          open={editOpen}
          form={form}
          onClose={() => setEditOpen(false)}
          onSave={saveProfile}
          onChange={(updated) => setForm(updated)}
        />
      )}
    </main>
  );
}
