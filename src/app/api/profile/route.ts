import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";


export async function GET() {
  try {
    const user = await prisma.user.findFirst({
      include: {
        skills: true,
        socialLinks: true,
      },
    });

    if (!user) {
      return NextResponse.json({
        name: "",
        title: "",
        bio: "",
        skills: [],
        socialLinks: [],
      });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { name, title, bio, skills } = await req.json();

    let user = await prisma.user.findFirst();

    if (!user) {
      user = await prisma.user.create({
        data: {
          name,
          title,
          bio,
          avatarUrl: "",
        },
      });
    } else {
      await prisma.user.update({
        where: { id: user.id },
        data: { name, title, bio },
      });

      await prisma.skill.deleteMany({
        where: { userId: user.id },
      });
    }

    await prisma.skill.createMany({
      data: skills.map((s: string) => ({
        name: s,
        userId: user.id,
      })),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
