import Link from "next/link";
import Image from "next/image";
import JWThompson from "./J_Walter_Thompson.png";
// import {Card, Cards} from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <main className="container relative max-w-6xl flex flex-1 flex-col justify-center ">
      <h1 className="text-center mb-12 text-2xl font-bold">The Thompson Way of Total Branding</h1>
      <div className="container flex flex-col lg:flex-row md:grid-cols-2 items-center gap-16 pb-4 ">
        <div className="lg:order-last">
          <Image src={JWThompson} alt="Architecture" className="mx-auto w-full max-w-[400px] invert dark:invert-0 lg:mx-0" />
        </div>
        <div className="space-y-4">
          <p className="text-fd-muted-foreground">
            Em 2014 o Jurandir Craveiro compartilhou o trabalho que fez convertendo o conteúdo de CD pra web, que mencionou aqui:
            <a className="px-1 text-fd-foreground font-semibold underline" href="https://www.jura.com.br/premio-gp-formadores/">
              https://www.jura.com.br/premio-gp-formadores/
            </a>
          </p>
          <p className="text-fd-muted-foreground">
            Infelizmente o{" "}
            <a href="https://web.archive.org/web/20180716190000/http://jura.com.br/jwt/Fset001.htm" className="text-fd-foreground font-semibold underline px-1">
              conteúdo original
            </a>{" "}
            está acessível apenas atraves do WebArchive, e o site original não está mais disponível.
          </p>
          <p className="text-fd-muted-foreground">
            Acessando o histórico do site no WebArchive, estou atualizando o material pra uma plataforma mais moderna. Clique em{" "}
            <Link href="/docs" className="text-fd-foreground font-semibold underline px-1">
              Documentation
            </Link>{" "}
            para ver o conteúdo disponível.
            {/* <Cards>
              <Card title="Documentation" href="/docs" />
              <Card title="Learn more about Fumadocs" href="https://fumadocs.vercel.app" />
            </Cards> */}
          </p>
        </div>
      </div>
    </main>
  );
}
