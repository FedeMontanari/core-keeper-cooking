import CategoryHeader from "@/components/CategoryHeader";
import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";

const food: Category[] = [
  {
    name: "Mushroom",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/8c/Mushroom.png/revision/latest?cb=20220402051337",
    buff: "4.2 Health/Second",
    rarity: 1,
  },
  {
    name: "Heart Berry",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/d/da/Heart_Berry.png/revision/latest?cb=20220215171902",
    buff: "25 Max Health",
    rarity: 1,
  },
  {
    name: "Golden Heart Berry",
    icon: "https://corekeeper.atma.gg/english/images/4/4e/Golden_Heart_Berry.png",
    buff: "62 Max Health & 21% Melee Damage",
    rarity: 3,
  },
  {
    name: "Glow Tulip",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/2/28/Glow_Tulip.png/revision/latest?cb=20220224161534",
    buff: "4 Blue Glow",
    rarity: 1,
  },
  {
    name: "Bomb Pepper",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/4/44/Bomb_Pepper.png/revision/latest?cb=20220215182450",
    buff: "21% Movement Speed",
    rarity: 1,
  },
  {
    name: "Golden Bomb Pepper",
    icon: "https://corekeeper.atma.gg/english/images/c/c1/Golden_Bomb_Pepper.png",
    buff: "34% Movement Speed & 4% Melee Attack Speed",
    rarity: 3,
  },
  {
    name: "Bloat Oat",
    icon: "https://corekeeper.atma.gg/english/images/e/e6/Bloat_Oat.png",
    buff: "43 Food & 9.1 Health/Second",
    rarity: 2,
  },
  {
    name: "Golden Bloat Oat",
    icon: "https://corekeeper.atma.gg/english/images/a/a2/Golden_Bloat_Oat.png",
    buff: "52 Food, 15 Health/Second & 12% Less Food Drained While Running",
    rarity: 3,
  },
  {
    name: "Bright Lava Eater",
    icon: "https://corekeeper.atma.gg/english/images/5/55/Bright_Lava_Eater.png",
    buff: "21% More Healing from Health Over Time",
    rarity: 2,
  },
  {
    name: "Amber Larva",
    icon: "https://corekeeper.atma.gg/english/images/7/72/Amber_Larva.png",
    buff: "+50 Permanent Max Health & 65 Max Health",
    rarity: 4
  }
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
