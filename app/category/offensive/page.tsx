import CategoryHeader from "@/components/CategoryHeader";
import CategoryTable from "@/components/CategoryTable";
import { Category } from "@/types/Category";

const food: Category[] = [
  {
    name: "Pewpaya",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/6/66/Pewpaya.png/revision/latest?cb=20220615093633",
    buff: "22.4% Range Damage",
    rarity: 2,
  },
  {
    name: "Splendid Deepstalker",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/0e/Splendid_Deepstalker.png/revision/latest?cb=20231004094002",
    buff: "6.2% Melee and Ranged Attack Speed & 10% Dodge Chance & 21.2% Movement Speed",
    rarity: 4,
  },
  {
    name: "Devil Worm",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/1/16/Devil_Worm.png/revision/latest?cb=20220308213925",
    buff: "23% Ranged Damage",
    rarity: 2,
  },
  {
    name: "Teal Palace Fish",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/e/e6/Teal_Palace_Fish.png/revision/latest?cb=20220308214013",
    buff: "4% Ranged Attack Speed",
    rarity: 2,
  },
  {
    name: "Pink Coralotl",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/b/b1/Pink_Coralotl.png/revision/latest?cb=20220615093641",
    buff: "53.3% Range Damage",
    rarity: 3,
  },
  {
    name: "Brown Dune Tail",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/7/7e/Brown_Dune_Tail.png/revision/latest?cb=20221110110451",
    buff: "6.4% Range Attack Speed",
    rarity: 3,
  },
  {
    name: "Golden Glow Tulip",
    icon: "https://corekeeper.atma.gg/english/images/5/53/Golden_Glow_Tulip.png",
    buff: "9 Glow & 4% Range Attack Speed",
    rarity: 3,
  },
  {
    name: "Golden Pewpaya",
    icon: "https://corekeeper.atma.gg/english/images/3/37/Golden_Pewpaya.png",
    buff: "35% Range Damage & 5% Range Attack Speed",
    rarity: 3,
  },
  {
    name: "Starlight Nautilus",
    icon: "https://corekeeper.atma.gg/english/images/c/c3/Starlight_Nautilus.png",
    buff: "11% Crit Hit, 6% Melee and Range Attack Speed & 100 Permanent Max Health(Only Once)",
    rarity: 5,
  },
  {
    name: "Pinegrapple",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/09/Pinegrapple.png/revision/latest?cb=20220615093639",
    buff: "22.4% Melee Damage",
    rarity: 2,
  },
  {
    name: "Rock Jaw",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/3/3b/Rock_Jaw.png/revision/latest?cb=20220308214000",
    buff: "15.9% Melee Damage",
    rarity: 2,
  },
  {
    name: "Pink Palace Fish",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/e/ea/Pink_Palace_Fish.png/revision/latest?cb=20220308213956",
    buff: "4% Melee Attack Speed",
    rarity: 2,
  },
  {
    name: "Mold Shark",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/d/d8/Mold_Shark.png/revision/latest?cb=20220308213946",
    buff: "34% Melee Damage",
    rarity: 1,
  },
  {
    name: "Grey Dune Tail",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/80/Grey_Dune_Tail.png/revision/latest?cb=20221110110612",
    buff: "6.4% Melee Attack Speed",
    rarity: 3,
  },
  {
    name: "Dark Lava Eater",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/5/5a/Dark_Lava_Eater.png/revision/latest?cb=20221110110518",
    buff: "+7 HP on Melee Hit",
    rarity: 2,
  },
  {
    name: "Golden Bomb Pepper",
    icon: "https://corekeeper.atma.gg/english/images/c/c1/Golden_Bomb_Pepper.png",
    buff: "34% Movement Speed & 4% Melee Attack Speed",
    rarity: 3,
  },
  {
    name: "Golden Pinegrapple",
    icon: "https://corekeeper.atma.gg/english/images/1/11/Golden_Pinegrapple.png",
    buff: "35% Melee Damage & 5% Melee Attack Speed",
    rarity: 3,
  },
  {
    name: "Silver Dart",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/1/16/Silver_Dart.png/revision/latest?cb=20220615093740",
    buff: "31% Crit Hit Damage",
    rarity: 2,
  },
  {
    name: "Larva Meat",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/0b/Larva_Meat.png/revision/latest?cb=20220215183222",
    buff: "6% Crit Hit Chance",
    rarity: 1,
  },
  {
    name: "Emerald Feather Fish",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/ce/Emerald_Feather_Fish.png/revision/latest?cb=20220308213927",
    buff: "7% Crit Hit Chance",
    rarity: 1,
  },
  {
    name: "Elder Dragonfish",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/3/34/Elder_Dragonfish.png/revision/latest?cb=20221110110532",
    buff: "14% Crit Hit Chance & Immune to Burning",
    rarity: 3,
  },
  {
    name: "Verdant Dragonfish",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/cf/Verdant_Dragonfish.png/revision/latest?cb=20221110110815",
    buff: "41% Crit Hit Damage & Immune to Burning",
    rarity: 3,
  },
  {
    name: "Vampire Eel",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/6/6b/Vampire_Eel.png/revision/latest?cb=20220308214014",
    buff: "3 Life on Hit",
    rarity: 3,
  },
  {
    name: "Dagger Fin",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/b/ba/Dagger_Fin.png/revision/latest?cb=20220308213922",
    buff: "13 Thorns",
    rarity: 1,
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
    name: "Sandy Spikeback",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/83/Sandy_Spikeback.png/revision/latest?cb=20221110110740",
    buff: "50 Thorns & 78 Max Health",
    rarity: 1,
  },
  {
    name: "Crown Squid",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c4/Crown_Squid.png/revision/latest?cb=20220308213920",
    buff: "19% Chance to Knockback",
    rarity: 4,
  },
  {
    name: "Tentacle Jerky",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c8/Tentacle_Jerky.png/revision/latest?cb=20220615093806",
    buff: "34% Knockback Chance",
    rarity: 2,
  },
  {
    name: "Golden Carrock",
    icon: "https://corekeeper.atma.gg/english/images/5/55/Golden_Carrock.png",
    buff: "32 Armor & 11% Chance to Knockback",
    rarity: 3,
  },
  {
    name: "Marble Meat",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/c/c9/Marbled_Meat.png/revision/latest?cb=20230510092534",
    buff: "13.3% Damage",
    rarity: 1,
  },
  {
    name: "Tornis Kingfish",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/6/68/Tornis_Kingfish.png/revision/latest?cb=20221110110813",
    buff: "50.4% Damage",
    rarity: 4,
  },
  {
    name: "Cosmic Form",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/7/74/Cosmic_Form.png/revision/latest?cb=20231004093836",
    buff: "30.9% Damage from your Pet",
    rarity: 4,
  },
  {
    name: "Sunrice",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/8/87/Sunrice.png/revision/latest?cb=20231004094006",
    buff: "16% Damage against Bosses",
    rarity: 2,
  },
  {
    name: "Golden Puffungi",
    icon: "https://corekeeper.atma.gg/english/images/6/6c/Golden_Puffungi.png",
    buff: "14% Damage Reduced From Bosses & 17% Damage Against Bosses",
    rarity: 3,
  },
];

export default function Offensive() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <CategoryHeader catName="Offensive" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <CategoryTable category={food} />
      </section>
    </main>
  );
}
