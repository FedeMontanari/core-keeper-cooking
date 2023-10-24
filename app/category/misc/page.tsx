import CategoryHeader from "@/components/CategoryHeader";
import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";

const food: Category[] = [
  {
    name: "Mushroom",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/8c/Mushroom.png/revision/latest?cb=20220402051337",
    buff: "4.2 Health/Second",
    rarity: "common",
  },
  {
    name: "Heart Berry",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/d/da/Heart_Berry.png/revision/latest?cb=20220215171902",
    buff: "25 Max Health",
    rarity: "common",
  },
  {
    name: "Glow Tulip",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/2/28/Glow_Tulip.png/revision/latest?cb=20220224161534",
    buff: "4 Blue Glow",
    rarity: "uncommon",
  },
  {
    name: "Bomb Pepper",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/4/44/Bomb_Pepper.png/revision/latest?cb=20220215182450",
    buff: "21% Movement Speed",
    rarity: "uncommon",
  },
  {
    name: "Placeholder",
    icon: "",
    buff: "Placeholder",
    rarity: "legendary",
  },
];

export default function Misc() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <CategoryHeader catName="Miscellaneous" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <CategoryTable category={food} />
      </section>
    </main>
  );
}
