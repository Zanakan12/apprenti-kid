import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const data = await req.json()

  const progress = await prisma.userProgress.upsert({
    where: {
      enfantId_module: {
        enfantId: data.enfantId,
        module: data.module,
      },
    },
    update: {
      itemIndex: data.itemIndex,
      points: data.points,
    },
    create: {
      enfantId: data.enfantId,
      module: data.module,
      itemIndex: data.itemIndex,
      points: data.points,
    },
  })

  await prisma.enfant.update({
    where: { id: data.enfantId },
    data: {
      points: { increment: data.points },
    },
  })

  return NextResponse.json(progress)
}
