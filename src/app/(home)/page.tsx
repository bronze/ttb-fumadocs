import Link from "next/link";
import Image from "next/image";
import JWThompson from "./J_Walter_Thompson.png";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Hello World</h1>
      <div className="container grid md:grid-cols-2 items-center gap-4 pb-4 ">
        <div className="md:order-last">
          <Image src={JWThompson} alt="Architecture" className="mx-auto w-full max-w-[400px] invert dark:invert-0 lg:mx-0" />
        </div>
        <div className="">
          <p className="text-fd-muted-foreground">
            You can open{" "}
            <Link href="/docs" className="text-fd-foreground font-semibold underline">
              /docs
            </Link>{" "}
            and see the documentation.
          </p>
        </div>
      </div>
    </main>
  );
}
