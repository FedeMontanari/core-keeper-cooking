import CategoryHeader from "@/components/CategoryHeader";
import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";

const food: Category[] = [
  {
    name: "Gem Crab",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/ca/Gem_Crab.png/revision/latest?cb=20220308213932",
    buff: "14 Armor",
    rarity: "rare",
  },
  {
    name: "Carrock",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c1/Carrock.png/revision/latest?cb=20220215182803",
    buff: "23 Armor",
    rarity: "uncommon",
  },
  {
    name: "Puffungi",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/88/Puffungi.png/revision/latest?cb=20220314085109",
    buff: "-6% Damage from Bosses",
    rarity: "uncommon",
  },
  {
    name: "Blue Cave Guppy",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/0c/Blue_Cave_Guppy.png/revision/latest?cb=20220308213911",
    buff: "4% Dodge Chance",
    rarity: "common",
  },
  {
    name: "Golden Dart",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/f/f6/Golden_Dart.png/revision/latest?cb=20220615093502",
    buff: "11% Dodge Chance",
    rarity: "uncommon",
  },
  {
    name: "Placeholder",
    icon: "",
    buff: "Placeholder",
    rarity: "legendary",
  },
];

export default function Defensive() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <CategoryHeader catName="Defensive" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <CategoryTable category={food} />
      </section>
    </main>
  );
}
