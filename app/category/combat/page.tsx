import Image from "next/image";
import Link from "next/link";
import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";

const food: Category[] = [
  {
    name: "Larva Meat",
    buff: "6% Crit Hit Chance",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/0b/Larva_Meat.png/revision/latest?cb=20220215183222",
  },
  {
    name: "Carrock",
    buff: "23 Armor",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c1/Carrock.png/revision/latest?cb=20220215182803"
  },
  {
    name: "Shiny Larva Meat",
    buff: "16% Crit Hit Chance & +4 Life on Melee Hit",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/f/f5/GoldenLarvaMeat.png",
  },
  {
    name: "Puffungi",
    buff: "-8% Dmg from Bosses",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/88/Puffungi.png/revision/latest?cb=20220314085109",
  },
  {
    name: "Blue Cave Guppy",
    buff: "5% Dodge Chance",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/0c/Blue_Cave_Guppy.png/revision/latest?cb=20220308213911",
  },
  {
    name: "Rock Jaw",
    buff: "16% Melee Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/3/3b/Rock_Jaw.png/revision/latest?cb=20220308214000",
  },
  {
    name: "Devil Worm",
    buff: "23% Ranged Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/1/16/Devil_Worm.png/revision/latest?cb=20220308213925",
  },
  {
    name: "Vampire Eel",
    buff: "3 Life on Hit",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/6/6b/Vampire_Eel.png/revision/latest?cb=20220308214014",
  },
  {
    name: "Dagger Fin",
    buff: "13 Thorns",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/b/ba/Dagger_Fin.png/revision/latest?cb=20220308213922",
  },
  {
    name: "Pink Palace Fish",
    buff: "4% Melee Attack Speed",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/e/ea/Pink_Palace_Fish.png/revision/latest?cb=20220308213956",
  },
  {
    name: "Teal Palace Fish",
    buff: "4% Ranged Attack Speed",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/e/e6/Teal_Palace_Fish.png/revision/latest?cb=20220308214013",
  },
  {
    name: "Crown Squid",
    buff: "10% Chance to Knockback",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c4/Crown_Squid.png/revision/latest?cb=20220308213920",
  },
  {
    name: "Emerald Feather Fish",
    buff: "7% Crit. Hit Chance",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/ce/Emerald_Feather_Fish.png/revision/latest?cb=20220308213927",
  },
  {
    name: "Mold Shark",
    buff: "34% Melee Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/d/d8/Mold_Shark.png/revision/latest?cb=20220308213946",
  },
  {
    name: "Black Steel Urchin",
    buff: "15 Thorns & 22 Armor",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/5/5e/Black_Steel_Urchin.png/revision/latest?cb=20220308213910",
  },
  {
    name: "Green Blister Head",
    buff: "Immune to Acid Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/f/f3/Green_Blister_Head.png/revision/latest?cb=20220308213938",
  },
];

export default function Combat() {
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
        <h1 className="text-2xl font-bold">Combat Food</h1>
      </header>
      <section className="w-11/12 h-fit pb-5 infocard-fancy">
        <CategoryTable category={food} />
      </section>
    </main>
  );
}
