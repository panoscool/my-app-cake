import Image from "next/image";
import { NavItems } from "../components/nav-items";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a href="https://nextjs.org/docs" target="_blank">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </a>

      <NavItems />
    </main>
  );
}
