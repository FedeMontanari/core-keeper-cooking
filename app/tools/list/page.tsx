import CategoryTable from "@/components/CategoryTable";
import ToolHeader from "@/components/ToolHeader";
import { Category } from "@/types/Category";
import React from "react";

const food: Category[] = [
  {
    name: "Astral Jelly",
    buff: "63 Fishing",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/2/29/Astral_Jelly.png/revision/latest?cb=20220308213906",
    rarity: 3,
  },
  {
    name: "Orange Cave Guppy",
    buff: "8 Mining Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/00/Orange_Cave_Guppy.png/revision/latest?cb=20220308213951",
    rarity: 1,
  },
  {
    name: "Cave Crunch",
    buff: "50 Mining Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/b/b3/Cave_Crunch.png/revision/latest?cb=20220619062332",
    rarity: 2,
  },
  {
    name: "Bottom Tracer",
    buff: "69 Mining Damage",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/6/6c/Bottom_Tracer.png/revision/latest?cb=20220615093330",
    rarity: 1,
  },
  {
    name: "White Coralotl",
    buff: "6.5% mining Speed",
    icon: "https://static.wikia.nocookie.net/core-keeper/images/0/05/White_Coralotl.png/revision/latest?cb=20220615093821",
    rarity: 3,
  },
  {
    name: "Grumpkin (EVENT)",
    icon: "https://corekeeper.atma.gg/english/images/3/31/Grumpkin.png",
    buff: "56 Mining Damage",
    rarity: 2,
  },
  {
    name: "Golden Grumpkin (EVENT)",
    icon: "https://corekeeper.atma.gg/english/images/5/50/Golden_Grumpkin.png",
    buff: "89 Mining Damage & 3% Mining Speed",
    rarity: 3,
  },
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
    rarity: 4,
  },
];

export default function FullList() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col gap-5">
      <ToolHeader toolName="Full List" />
      <section className="w-11/12 h-fit pb-5 infocard-fancy mt-24">
        <CategoryTable category={food} searchbar={true} />
      </section>
    </main>
  );
}
