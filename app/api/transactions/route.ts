import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const transaction = await prisma.transaction.create({
      data: {
        chain: body.chain,
        tsHash: body.tsHash,
        fromAddress: body.fromAddress,
        toAddress: body.toAddress,
        amount: body.amount,
        status: "PENDING",
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const transactions = await prisma.transaction.findMany({
      orderBy: { timestamp: "desc" },
      take: 100,
    });

    return NextResponse.json(transactions);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
