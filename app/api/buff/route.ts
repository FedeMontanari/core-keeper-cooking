import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const entries = await prisma.buff.findMany();
  return NextResponse.json(entries);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newEntry = await prisma.buff.create({
    data,
  });
  return NextResponse.json(newEntry);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const entry = await prisma.buff.update({
    where: {
      id: data.id,
    },
    data,
  });
  return NextResponse.json(entry);
}

export async function DELETE(req: NextRequest) {
  const data = await req.json();
  const entry = await prisma.buff.delete({
    where: {
      id: data.id,
    },
  });
  return NextResponse.json(entry);
}
