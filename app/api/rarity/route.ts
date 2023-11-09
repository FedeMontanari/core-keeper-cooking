import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const entries = await prisma.rarity.findMany();
  return NextResponse.json(entries);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newEntry = await prisma.rarity.create({
    data,
  });
  return NextResponse.json(newEntry);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const entry = await prisma.rarity.update({
    where: {
      id: data.id,
    },
    data,
  });
  return NextResponse.json(entry);
}

export async function DELETE(req: NextRequest) {
  const data = await req.json();
  const entry = await prisma.rarity.delete({
    where: {
      id: data.id,
    },
  });
  return NextResponse.json(entry);
}
