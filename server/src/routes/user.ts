import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"

export async function userRoutes(fastify: FastifyInstance) {
    fastify.get('/users/count', async () => {
        const count = await prisma.user.count()
    
        return { count }
    })
    
    fastify.get('/users/participant', async () => {
        const count = await prisma.participant.count()
    
        return { count }
    })
}