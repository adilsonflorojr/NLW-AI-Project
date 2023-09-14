import { fastify } from "fastify";
import { getAll } from "./routes/Allprompts";
import { upload } from "./routes/upload";
import { create } from "./routes/transcription";
const app = fastify();


app.register(getAll)
app.register(upload)
app.register(create)

try{
    app.listen( 
        3000 
    ).then(() => {
      console.log("Servidor rodando na porta 3000");
    });
} catch {
    console.log("Erro; servidor");
}
