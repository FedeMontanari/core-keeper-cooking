import CategoryHeader from "@/components/CategoryHeader";
import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";

const food: Category[] = [
  {
    name: "Orange Cave Guppy",
    buff: "8 Mining Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/00/Orange_Cave_Guppy.png/revision/latest?cb=20220308213951",
    rarity: "common",
  },
  {
    name: "Astral Jelly",
    buff: "63 Fishing",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/2/29/Astral_Jelly.png/revision/latest?cb=20220308213906",
    rarity: "rare",
  },
  {
    name: "Cave Crunch",
    buff: "50 Mining Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/b/b3/Cave_Crunch.png/revision/latest?cb=20220619062332",
    rarity: "uncommon",
  },
  {
    name: "Bottom Tracer",
    buff: "69 Mining Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/6/6c/Bottom_Tracer.png/revision/latest?cb=20220615093330",
    rarity: "common",
  },
  {
    name: "White Coralotl",
    buff: "6.5% mining Speed",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/05/White_Coralotl.png/revision/latest?cb=20220615093821",
    rarity: "rare",
  },
  {
    name: "Placeholder",
    icon: "",
    buff: "Placeholder",
    rarity: "legendary",
  },
];

export default function Skills() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <CategoryHeader catName="Skills" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <CategoryTable category={food} />
      </section>
    </main>
  );
}
