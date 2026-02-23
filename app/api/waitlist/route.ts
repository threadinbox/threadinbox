import { NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    const existing = await prisma.waitlist.findUnique({
      where: { email },
    })

    if (existing) {
      return NextResponse.json(
        { message: "Already on waitlist" },
        { status: 200 }
      )
    }

    await prisma.waitlist.create({
      data: { email },
    })

    return NextResponse.json(
      { message: "Successfully joined waitlist" },
      { status: 200 }
    )
  } catch (error) {
    console.error("WAITLIST ERROR:", error)

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}