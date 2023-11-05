import CategoryHeader from "@/components/CategoryHeader";
import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";

const food: Category[] = [
  {
    name: "Gem Crab",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/ca/Gem_Crab.png/revision/latest?cb=20220308213932",
    buff: "14 Armor",
    rarity: 3,
  },
  {
    name: "Carrock",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c1/Carrock.png/revision/latest?cb=20220215182803",
    buff: "23 Armor",
    rarity: 2,
  },
  {
    name: "Golden Carrock",
    icon: "https://corekeeper.atma.gg/english/images/5/55/Golden_Carrock.png",
    buff: "32 Armor & 11% Chance to Knockback",
    rarity: 3,
  },
  {
    name: "Black Steel Urchin",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/5/5e/Black_Steel_Urchin.png/revision/latest?cb=20220308213910",
    buff: "15 Thorns & 22 Armor",
    rarity: 3,
  },
  {
    name: "Solid Spikeback",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/9/9d/Solid_Spikeback.png/revision/latest?cb=20221110110754",
    buff: "50 Thorns & 38 Armor",
    rarity: 1,
  },
  {
    name: "Blue Cave Guppy",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/0c/Blue_Cave_Guppy.png/revision/latest?cb=20220308213911",
    buff: "4% Dodge Chance",
    rarity: 1,
  },
  {
    name: "Golden Dart",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/f/f6/Golden_Dart.png/revision/latest?cb=20220615093502",
    buff: "11% Dodge Chance",
    rarity: 2,
  },
  {
    name: "Puffungi",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/88/Puffungi.png/revision/latest?cb=20220314085109",
    buff: "-6% Damage from Bosses",
    rarity: 2,
  },
  {
    name: "Golden Puffungi",
    icon: "https://corekeeper.atma.gg/english/images/6/6c/Golden_Puffungi.png",
    buff: "14% Damage Reduced From Bosses & 17% Damage Against Bosses",
    rarity: 3,
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
