import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import { fastifyMultipart } from "@fastify/multipart"
import path from "node:path";
import { randomUUID } from 'node:crypto'
import { pipeline } from "node:stream"
import { promisify } from "node:util"
import fs from "node:fs"

export async function upload(app:FastifyInstance) {
    
    const a = promisify(pipeline);

    app.register(fastifyMultipart, {
        limits: {
            fileSize: 1048576 * 20,
        }, 
    }) 
    app.post("/videos", async (req, reply) => {    
        const data = await req.file()
        
        if(!data){
            return reply.status(400).send({error: "Algo esta errado. Revise as informações e Tente novamente"})
        }
        const arq = path.extname(data.filename)
        if(arq != '.mp3'){
            return reply.status(400).send({Error: "Arquivos permitidos somente: MP3"})
        }
        const File_name = path.basename(data.filename, arq)
        const upload_name = `${File_name} - ${randomUUID()} ${arq}`
        const upload_arq_dest = path.resolve(__dirname, "../../arq", upload_name);
        await a(data.file, fs.createWriteStream(upload_arq_dest))
        const storage = await prisma.video.create({
            data:{
                nome: data.filename,
                caminho: upload_arq_dest,
            }
        })
        return reply.status(200);
    })  
}