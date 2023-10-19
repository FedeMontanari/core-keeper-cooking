import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";

const food: Category[] = [
  {
    name: "Mushroom",
    buff: "4 Health/Sec & 10 Max Health",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c1/Mushroom_test1.png/revision/latest?cb=20220215171014",
  },
  {
    name: "Heart Berry",
    buff: "25 Max Health",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/d/da/Heart_Berry.png/revision/latest?cb=20220215171902",
  },
];

export default function Vitality() {
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
        <h1 className="text-2xl font-bold">Vitality Food</h1>
      </header>
      <section className="w-11/12 h-fit pb-5 infocard-fancy">
        <CategoryTable category={food} caption={{show: true, content: "Note: All food items give a Health/second buff depending on the level of the item itself."}} />
      </section>
    </main>
  );
}
