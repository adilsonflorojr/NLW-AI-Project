import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'

 export async function getAll(app:FastifyInstance) {
    app.get("/prompts", async () => {
        const prompts = await prisma.cLI.findMany({})
        return prompts
          
    });   
 }