import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    name: "Giant Mushroom",
    slug: "giant_mushroom",
    food_value: 31,
    icon_url:
      "https://corekeeper.atma.gg/english/images/3/35/Giant_Mushroom.png",
    ingame_id: 5502,
  },
  {
    name: "Amber Larva",
    slug: "amber_larva",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/7/72/Amber_Larva.png",

    ingame_id: 5503,
  },
  {
    name: "Larva Meat",
    slug: "larva_meat",
    food_value: 22,
    icon_url: "https://corekeeper.atma.gg/english/images/0/0b/Larva_Meat.png",

    ingame_id: 1645,
  },
  {
    name: "Shiny Larva Meat",
    slug: "shiny_larva_meat",
    food_value: 25,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/58/Shiny_Larva_Meat.png",

    ingame_id: 1646,
  },
  {
    name: "Mushroom",
    slug: "mushroom",
    food_value: 19,
    icon_url: "https://corekeeper.atma.gg/english/images/8/8c/Mushroom.png",

    ingame_id: 5500,
  },
  {
    name: "Heart Berry",
    slug: "heart_berry",
    food_value: 19,
    icon_url: "https://corekeeper.atma.gg/english/images/d/da/Heart_Berry.png",

    ingame_id: 8003,
  },
  {
    name: "Glow Tulip",
    slug: "glow_tulip",
    food_value: 4,
    icon_url: "https://corekeeper.atma.gg/english/images/2/28/Glow_Tulip.png",

    ingame_id: 8006,
  },
  {
    name: "Bomb Pepper",
    slug: "bomb_pepper",
    food_value: 10,
    icon_url: "https://corekeeper.atma.gg/english/images/4/44/Bomb_Pepper.png",

    ingame_id: 8009,
  },
  {
    name: "Carrock",
    slug: "carrock",
    food_value: 15,
    icon_url: "https://corekeeper.atma.gg/english/images/c/c1/Carrock.png",

    ingame_id: 8012,
  },
  {
    name: "Puffungi",
    slug: "puffungi",
    food_value: 10,
    icon_url: "https://corekeeper.atma.gg/english/images/8/88/Puffungi.png",

    ingame_id: 8015,
  },
  {
    name: "Bloat Oat",
    slug: "bloat_oat",
    food_value: 43,
    icon_url: "https://corekeeper.atma.gg/english/images/e/e6/Bloat_Oat.png",

    ingame_id: 8024,
  },
  {
    name: "Pewpaya",
    slug: "pewpaya",
    food_value: 20,
    icon_url: "https://corekeeper.atma.gg/english/images/6/66/Pewpaya.png",

    ingame_id: 8027,
  },
  {
    name: "Pinegrapple",
    slug: "pinegrapple",
    food_value: 20,
    icon_url: "https://corekeeper.atma.gg/english/images/0/09/Pinegrapple.png",

    ingame_id: 8030,
  },
  {
    name: "Grumpkin",
    slug: "grumpkin",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/3/31/Grumpkin.png",

    ingame_id: 8033,
  },
  {
    name: "Golden Heart Berry",
    slug: "golden_heart_berry",
    food_value: 18,
    icon_url:
      "https://corekeeper.atma.gg/english/images/4/4e/Golden_Heart_Berry.png",

    ingame_id: 8100,
  },
  {
    name: "Golden Glow Tulip",
    slug: "golden_glow_tulip",
    food_value: 7,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/53/Golden_Glow_Tulip.png",

    ingame_id: 8101,
  },
  {
    name: "Golden Bomb Pepper",
    slug: "golden_bomb_pepper",
    food_value: 11,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/c1/Golden_Bomb_Pepper.png",

    ingame_id: 8102,
  },
  {
    name: "Golden Carrock",
    slug: "golden_carrock",
    food_value: 13,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/55/Golden_Carrock.png",

    ingame_id: 8103,
  },
  {
    name: "Golden Puffungi",
    slug: "golden_puffungi",
    food_value: 10,
    icon_url:
      "https://corekeeper.atma.gg/english/images/6/6c/Golden_Puffungi.png",

    ingame_id: 8104,
  },
  {
    name: "Golden Bloat Oat",
    slug: "golden_bloat_oat",
    food_value: 42,
    icon_url:
      "https://corekeeper.atma.gg/english/images/a/a2/Golden_Bloat_Oat.png",

    ingame_id: 8105,
  },
  {
    name: "Golden Pewpaya",
    slug: "golden_pewpaya",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/3/37/Golden_Pewpaya.png",

    ingame_id: 8106,
  },
  {
    name: "Golden Pinegrapple",
    slug: "golden_pinegrapple",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/1/11/Golden_Pinegrapple.png",

    ingame_id: 8107,
  },
  {
    name: "Golden Grumpkin",
    slug: "golden_grumpkin",
    food_value: 18,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/50/Golden_Grumpkin.png",

    ingame_id: 8108,
  },
  {
    name: "Blue Cave Guppy",
    slug: "blue_cave_guppy",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/0/0c/Blue_Cave_Guppy.png",

    ingame_id: 9701,
  },
  {
    name: "Orange Cave Guppy",
    slug: "orange_cave_guppy",
    food_value: 19,
    icon_url:
      "https://corekeeper.atma.gg/english/images/0/00/Orange_Cave_Guppy.png",

    ingame_id: 9700,
  },
  {
    name: "Rock Jaw",
    slug: "rock_jaw",
    food_value: 22,
    icon_url: "https://corekeeper.atma.gg/english/images/3/3b/Rock_Jaw.png",

    ingame_id: 9702,
  },
  {
    name: "Gem Crab",
    slug: "gem_crab",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/c/ca/Gem_Crab.png",

    ingame_id: 9703,
  },
  {
    name: "Green Blister Head",
    slug: "green_blister_head",
    food_value: 20,
    icon_url:
      "https://corekeeper.atma.gg/english/images/f/f3/Green_Blister_Head.png",

    ingame_id: 9709,
  },
  {
    name: "Yellow Blister Head",
    slug: "yellow_blister_head",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/1/10/Yellow_Blister_Head.png",

    ingame_id: 9708,
  },
  {
    name: "Devil Worm",
    slug: "devil_worm",
    food_value: 20,
    icon_url: "https://corekeeper.atma.gg/english/images/1/16/Devil_Worm.png",

    ingame_id: 9710,
  },
  {
    name: "Vampire Eel",
    slug: "vampire_eel",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/6/6b/Vampire_Eel.png",

    ingame_id: 9711,
  },
  {
    name: "Dagger Fin",
    slug: "dagger_fin",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/b/ba/Dagger_Fin.png",

    ingame_id: 9704,
  },
  {
    name: "Pink Palace Fish",
    slug: "pink_palace_fish",
    food_value: 22,
    icon_url:
      "https://corekeeper.atma.gg/english/images/e/ea/Pink_Palace_Fish.png",

    ingame_id: 9705,
  },
  {
    name: "Teal Palace Fish",
    slug: "teal_palace_fish",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/e/e6/Teal_Palace_Fish.png",

    ingame_id: 9706,
  },
  {
    name: "Crown Squid",
    slug: "crown_squid",
    food_value: 19,
    icon_url: "https://corekeeper.atma.gg/english/images/c/c4/Crown_Squid.png",

    ingame_id: 9707,
  },
  {
    name: "Azure Feather Fish",
    slug: "azure_feather_fish",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/a/a4/Azure_Feather_Fish.png",

    ingame_id: 9715,
  },
  {
    name: "Emerald Feather Fish",
    slug: "emerald_feather_fish",
    food_value: 20,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/ce/Emerald_Feather_Fish.png",

    ingame_id: 9716,
  },
  {
    name: "Spirit Veil",
    slug: "spirit_veil",
    food_value: 19,
    icon_url: "https://corekeeper.atma.gg/english/images/5/5f/Spirit_Veil.png",

    ingame_id: 9717,
  },
  {
    name: "Astral Jelly",
    slug: "astral_jelly",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/2/29/Astral_Jelly.png",

    ingame_id: 9718,
  },
  {
    name: "Mold Shark",
    slug: "mold_shark",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/d/d8/Mold_Shark.png",

    ingame_id: 9712,
  },
  {
    name: "Rot Fish",
    slug: "rot_fish",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/6/62/Rot_Fish.png",

    ingame_id: 9713,
  },
  {
    name: "Black Steel Urchin",
    slug: "black_steel_urchin",
    food_value: 19,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/5e/Black_Steel_Urchin.png",

    ingame_id: 9714,
  },
  {
    name: "Bottom Tracer",
    slug: "bottom_tracer",
    food_value: 20,
    icon_url:
      "https://corekeeper.atma.gg/english/images/6/6c/Bottom_Tracer.png",

    ingame_id: 9719,
  },
  {
    name: "Silver Dart",
    slug: "silver_dart",
    food_value: 21,
    icon_url: "https://corekeeper.atma.gg/english/images/1/16/Silver_Dart.png",

    ingame_id: 9720,
  },
  {
    name: "Golden Dart",
    slug: "golden_dart",
    food_value: 22,
    icon_url: "https://corekeeper.atma.gg/english/images/f/f6/Golden_Dart.png",

    ingame_id: 9721,
  },
  {
    name: "Pink Coralotl",
    slug: "pink_coralotl",
    food_value: 22,
    icon_url:
      "https://corekeeper.atma.gg/english/images/b/b1/Pink_Coralotl.png",

    ingame_id: 9722,
  },
  {
    name: "White Coralotl",
    slug: "white_coralotl",
    food_value: 19,
    icon_url:
      "https://corekeeper.atma.gg/english/images/0/05/White_Coralotl.png",

    ingame_id: 9723,
  },
  {
    name: "Solid Spikeback",
    slug: "solid_spikeback",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/9/9d/Solid_Spikeback.png",

    ingame_id: 9724,
  },
  {
    name: "Sandy Spikeback",
    slug: "sandy_spikeback",
    food_value: 19,
    icon_url:
      "https://corekeeper.atma.gg/english/images/8/83/Sandy_Spikeback.png",

    ingame_id: 9725,
  },
  {
    name: "Grey Dune Tail",
    slug: "grey_dune_tail",
    food_value: 20,
    icon_url:
      "https://corekeeper.atma.gg/english/images/8/80/Grey_Dune_Tail.png",

    ingame_id: 9726,
  },
  {
    name: "Brown Dune Tail",
    slug: "brown_dune_tail",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/7/7e/Brown_Dune_Tail.png",

    ingame_id: 9727,
  },
  {
    name: "Tornis Kingfish",
    slug: "tornis_kingfish",
    food_value: 20,
    icon_url:
      "https://corekeeper.atma.gg/english/images/6/68/Tornis_Kingfish.png",

    ingame_id: 9728,
  },
  {
    name: "Dark Lava Eater",
    slug: "dark_lava_eater",
    food_value: 19,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/5a/Dark_Lava_Eater.png",

    ingame_id: 9729,
  },
  {
    name: "Bright Lava Eater",
    slug: "bright_lava_eater",
    food_value: 20,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/55/Bright_Lava_Eater.png",

    ingame_id: 9730,
  },
  {
    name: "Verdant Dragonfish",
    slug: "verdant_dragonfish",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/cf/Verdant_Dragonfish.png",

    ingame_id: 9731,
  },
  {
    name: "Elder Dragonfish",
    slug: "elder_dragonfish",
    food_value: 19,
    icon_url:
      "https://corekeeper.atma.gg/english/images/3/34/Elder_Dragonfish.png",

    ingame_id: 9732,
  },
  {
    name: "Starlight Nautilus",
    slug: "starlight_nautilus",
    food_value: 21,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/c3/Starlight_Nautilus.png",

    ingame_id: 9733,
  },
];

export default async function foodSeed() {
  await prisma.food.deleteMany();

  return await prisma.food.createMany({
    data,
  });
}
