import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const entries = await prisma.food.findMany({
    include: {
      buffs: {
        include: {
          type: true,
        },
      },
    },
  });
  return NextResponse.json(entries);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const newEntry = await prisma.food.create({
    data,
  });
  return NextResponse.json(newEntry);
}

export async function PUT(req: NextRequest) {}

export async function DELETE(req: NextRequest) {}
