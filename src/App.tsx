import { Button } from "./components/ui/button";
import { FileVideo, Github, Upload, Wand2 } from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="flex-col">
      <div className="px-5 py-6 flex items-center justify-between border-b">
        <h1 className="text-x1 font-bold">NLW AI Project</h1>
        <div className="flex items-center gap-2">
          <p className="text-sm text-zinc-300">
            Desenvolvido com ❤ no NLW da Rocketseat{" "}
          </p>
          <Separator orientation="vertical" className="h-5">
            {" "}
          </Separator>
          <Button variant={"ghost"}>
            <Github className="w-5 h-5 mr-1" />
            GitHub
          </Button>
        </div>
      </div>
      <main className="flex-1 flex p-4 gap-5">
        <div className="flex flex-col flex-1 gap 4">
          <div className="grid grid-rows-2 gap-3 flex-1">
            <Textarea
              className="resize-none"
              placeholder="Inclua o texto"
            ></Textarea>
            <Textarea
              className="resize-none"
              placeholder="Resultado gerado pela IA"
              readOnly
            ></Textarea>
          </div>{" "}
          <p className="text-violet-500">
            Lembre-se: Pode se utilizar a variavel transcription em seu prompt
            para adicionar o conteudo da transcrição do video
          </p>
        </div>
        <aside className="w-60 space-y-4">
          <form className="space-y-9  hover: bg-blue">
            <label
              htmlFor="inputvideo"
              className="border leading-relaxed flex rounded-lg aspect-video cursor-pointer flex-col gap-3 items-center align-middle justify-center hover: bg-primary/8"
            >
              <FileVideo className="w-5 h-5"></FileVideo>
              Procurar Video
            </label>
            <input
              type="file"
              id="inputvideo"
              accept="video/mp4"
              className="sr-only"
            ></input>
          </form>
          <form>
            <Separator></Separator>
            <div className="space-y-3">
              <Label htmlFor="transcription">Prompt de transcrição</Label>
              <Textarea
                id="transcription"
                className="h-20 leading-relaxed mt-10"
                placeholder="Inclua palavras-chaves separadas por virgula."
              ></Textarea>
            </div>
            <Button type="submit" className="w-full">
              Carregar video<Upload className="w-3 h-5 ml-3"></Upload>
            </Button>
          </form>
          <Separator></Separator>
          <form className="space-y-3">
            <div className=" space-y-3">
              <Label>Modelo</Label>
              <Select disabled defaultValue="GPT 3.5">
                <SelectTrigger>
                  <SelectValue></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem defaultValue="GPT 3.5-turbo 16k">
                    GPT 3.5-turbo 16k
                  </SelectItem>
                </SelectContent>
              </Select>
              <Separator></Separator>
              <span className="block italic">
                Você poderá customizar essa opção em breve
              </span>
              <Separator></Separator>
              <div className="space-y-4">
                <Label> Temperatura</Label>
              </div>
              <Slider min={0} max={1} step={0.1}>
                {" "}
              </Slider>
              <span className="block italic">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possiveis erros.
              </span>
              <Button type="submit" className="w-full">
                Executar
                <Wand2 className="w-7 h-5 ml-4 "></Wand2>
              </Button>
            </div>
          </form>
        </aside>
      </main>
    </div>
  );
}
