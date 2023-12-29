
import { PrismaClient } from '@prisma/client';
export async function GET(request: Request) {
  const prisma = new PrismaClient()
  const data = await prisma.user.findMany()
  return new Response(JSON.stringify(data), { status: 200 })
}

