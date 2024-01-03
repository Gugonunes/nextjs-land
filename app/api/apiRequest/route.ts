import { PrismaClient } from '@prisma/client'

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(req: any, res: any) {
  if (req.method === 'POST') {
    const prisma = new PrismaClient()
    
    const { username, email, phone, city } = await req.json()

    try {
      // Verificar se o email já está em uso
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email
        }
      })
    
      if (existingUser) {
        // Se o email já está em uso, retorne um erro
        return new Response(JSON.stringify({ message: 'Email já está em uso' }), { status: 400 })
      }
    
      // Se o email não está em uso, crie o novo usuário
      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          phone,
          city
        }
      })
    
      return new Response(JSON.stringify({message: 'Cadastro realizado com sucesso!'}), { status: 200 })
    } catch (error) {
      console.error(error)
      return new Response(JSON.stringify({ message: 'Erro interno no servidor' }), { status: 500 })
    } finally {
      await prisma.$disconnect()
    }
  }
}
