import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import { z } from "zod"
 export async function create(app:FastifyInstance) {
    app.get("/video/:videoid/transcription", async (request, reply) => {
        //validating information from the videoid variable
        const validate1 = z.object({
            videoid: z.string().uuid(),
        }) 
        //validate
        const { videoid } = validate1.parse(request.params)
        const validate2 = z.object({
            a: z.string(),
        })
         //validate
        const a = validate2.parse(request.body)
        const video = await prisma.video.findUniqueOrThrow({
            where:{
                id: videoid,
            }
        })

       /* const b = video.path;
        const audio = video
        */return{
            videoid,
            a,
        }
    });   
 }