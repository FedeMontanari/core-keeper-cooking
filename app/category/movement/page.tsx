import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";

const food: Category[] = [
  {
    name: "Bomb Pepper",
    buff: "21% Movement Speed",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/4/44/Bomb_Pepper.png/revision/latest?cb=20220215182450",
  },
  {
    name: "Spirit Veil",
    buff: "38% Movement Speed",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/5/5f/Spirit_Veil.png/revision/latest?cb=20220308214011"
  },
  {
    name: "Yellow Blister Head",
    buff: "Immune to Slime Slow",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/1/10/Yellow_Blister_Head.png/revision/latest?cb=20220308214016"
  },
  {
    name: "Rot Fish",
    buff: "Immune to Mold Infection",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/6/62/Rot_Fish.png/revision/latest?cb=20220308214002"
  },
];

export default function Movement() {
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
        <h1 className="text-2xl font-bold">Movement Food</h1>
      </header>
      <section className="w-11/12 h-fit pb-5 infocard-fancy">
        <CategoryTable category={food} />
      </section>
    </main>
  );
}
