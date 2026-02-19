
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

async function getPrisma() {
  if (!process.env.DATABASE_URL) return null;
  const { PrismaClient } = await import("@prisma/client");
  return new PrismaClient();
}

export async function GET() {
  try {
    const prisma = await getPrisma();

    if (!prisma) {
      // fallback during build or missing DB
      return NextResponse.json({
        name: "",
        title: "",
        bio: "",
        skills: [],
        socialLinks: [],
      });
    }

    const user = await prisma.user.findFirst({
      include: { skills: true, socialLinks: true },
    });

    return NextResponse.json(
      user ?? { name: "", title: "", bio: "", skills: [], socialLinks: [] }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load profile" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const prisma = await getPrisma();
    if (!prisma) return NextResponse.json({ success: false });

    const { name, title, bio, skills } = await req.json();
    let user = await prisma.user.findFirst();

    if (!user) {
      user = await prisma.user.create({
        data: { name, title, bio, avatarUrl: "" },
      });
    } else {
      await prisma.user.update({ where: { id: user.id }, data: { name, title, bio } });
    }

    await prisma.skill.deleteMany({ where: { userId: user.id } });
    await prisma.skill.createMany({
      data: skills.map((s: string) => ({ name: s, userId: user.id })),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
