import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";

const food: Category[] = [
  {
    name: "Orange Cave Guppy",
    buff: "8 Mining Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/00/Orange_Cave_Guppy.png/revision/latest?cb=20220308213951",
  },
  {
    name: "Astral Jelly",
    buff: "63 Fishing",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/2/29/Astral_Jelly.png/revision/latest?cb=20220308213906",
  },
];

export default function Skills() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <header className="flex flex-row w-full h-fit items-center justify-center gap-4 border-b bg-primary">
        <Link href="/" className="absolute left-6">
          Home
        </Link>
        <Image
          src={
            "https://static.wikia.nocookie.net/core-keeper/images/a/a9/Core_Keeper_logo.png"
          }
          alt="Game Logo"
          width={100}
          height={50}
        />
        <h1 className="text-2xl font-bold">Skills Food</h1>
      </header>
      <section className="w-11/12 h-fit pb-5 infocard-fancy">
        <CategoryTable category={food} />
      </section>
    </main>
  );
}
