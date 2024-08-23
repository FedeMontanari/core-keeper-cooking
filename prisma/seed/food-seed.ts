import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const data = [
  {
    name: "Giant Mushroom",
    slug: "giant_mushroom",
    foodValue: 31,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/3/35/Giant_Mushroom.png",
    hpBoost: 25,
    variation: null,
    ingameId: 5502,
    rarityId: 1,
  },
  {
    name: "Amber Larva",
    slug: "amber_larva",
    foodValue: 21,
    hps: 0,
    icon_url: "https://corekeeper.atma.gg/english/images/7/72/Amber_Larva.png",
    hpBoost: 50,
    variation: null,
    ingameId: 5503,
    rarityId: 4,
  },
  {
    name: "Larva Meat",
    slug: "larva_meat",
    foodValue: 22,
    hps: 2.8,
    icon_url: "https://corekeeper.atma.gg/english/images/0/0b/Larva_Meat.png",
    hpBoost: null,
    variation: null,
    ingameId: 1645,
    rarityId: 1,
  },
  {
    name: "Shiny Larva Meat",
    slug: "shiny_larva_meat",
    foodValue: 25,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/58/Shiny_Larva_Meat.png",
    hpBoost: null,
    variation: null,
    ingameId: 1646,
    rarityId: 1,
  },
  {
    name: "Mushroom",
    slug: "mushroom",
    foodValue: 19,
    hps: 4.2,
    icon_url: "https://corekeeper.atma.gg/english/images/8/8c/Mushroom.png",
    hpBoost: null,
    variation: null,
    ingameId: 5500,
    rarityId: 1,
  },
  {
    name: "Heart Berry",
    slug: "heart_berry",
    foodValue: 19,
    hps: 2.8,
    icon_url: "https://corekeeper.atma.gg/english/images/d/da/Heart_Berry.png",
    hpBoost: null,
    variation: null,
    ingameId: 8003,
    rarityId: 1,
  },
  {
    name: "Glow Tulip",
    slug: "glow_tulip",
    foodValue: 4,
    hps: 0,
    icon_url: "https://corekeeper.atma.gg/english/images/2/28/Glow_Tulip.png",
    hpBoost: null,
    variation: null,
    ingameId: 8006,
    rarityId: 1,
  },
  {
    name: "Bomb Pepper",
    slug: "bomb_pepper",
    foodValue: 10,
    hps: 0,
    icon_url: "https://corekeeper.atma.gg/english/images/4/44/Bomb_Pepper.png",
    hpBoost: null,
    variation: null,
    ingameId: 8009,
    rarityId: 1,
  },
  {
    name: "Carrock",
    slug: "carrock",
    foodValue: 15,
    hps: 0,
    icon_url: "https://corekeeper.atma.gg/english/images/c/c1/Carrock.png",
    hpBoost: null,
    variation: null,
    ingameId: 8012,
    rarityId: 2,
  },
  {
    name: "Puffungi",
    slug: "puffungi",
    foodValue: 10,
    hps: 5.5,
    icon_url: "https://corekeeper.atma.gg/english/images/8/88/Puffungi.png",
    hpBoost: null,
    variation: null,
    ingameId: 8015,
    rarityId: 2,
  },
  {
    name: "Bloat Oat",
    slug: "bloat_oat",
    foodValue: 43,
    hps: 9.1,
    icon_url: "https://corekeeper.atma.gg/english/images/e/e6/Bloat_Oat.png",
    hpBoost: null,
    variation: null,
    ingameId: 8024,
    rarityId: 2,
  },
  {
    name: "Pewpaya",
    slug: "pewpaya",
    foodValue: 20,
    hps: 6.3,
    icon_url: "https://corekeeper.atma.gg/english/images/6/66/Pewpaya.png",
    hpBoost: null,
    variation: null,
    ingameId: 8027,
    rarityId: 2,
  },
  {
    name: "Pinegrapple",
    slug: "pinegrapple",
    foodValue: 20,
    hps: 5.4,
    icon_url: "https://corekeeper.atma.gg/english/images/0/09/Pinegrapple.png",
    hpBoost: null,
    variation: null,
    ingameId: 8030,
    rarityId: 2,
  },
  {
    name: "Grumpkin",
    slug: "grumpkin",
    foodValue: 21,
    hps: 4.3,
    icon_url: "https://corekeeper.atma.gg/english/images/3/31/Grumpkin.png",
    hpBoost: null,
    variation: null,
    ingameId: 8033,
    rarityId: 1,
  },
  {
    name: "Golden Heart Berry",
    slug: "golden_heart_berry",
    foodValue: 18,
    hps: 4.4,
    icon_url:
      "https://corekeeper.atma.gg/english/images/4/4e/Golden_Heart_Berry.png",
    hpBoost: null,
    variation: null,
    ingameId: 8100,
    rarityId: 3,
  },
  {
    name: "Golden Glow Tulip",
    slug: "golden_glow_tulip",
    foodValue: 7,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/53/Golden_Glow_Tulip.png",
    hpBoost: null,
    variation: null,
    ingameId: 8101,
    rarityId: 3,
  },
  {
    name: "Golden Bomb Pepper",
    slug: "golden_bomb_pepper",
    foodValue: 11,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/c1/Golden_Bomb_Pepper.png",
    hpBoost: null,
    variation: null,
    ingameId: 8102,
    rarityId: 3,
  },
  {
    name: "Golden Carrock",
    slug: "golden_carrock",
    foodValue: 13,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/55/Golden_Carrock.png",
    hpBoost: null,
    variation: null,
    ingameId: 8103,
    rarityId: 3,
  },
  {
    name: "Golden Puffungi",
    slug: "golden_puffungi",
    foodValue: 10,
    hps: 3.9,
    icon_url:
      "https://corekeeper.atma.gg/english/images/6/6c/Golden_Puffungi.png",
    hpBoost: null,
    variation: null,
    ingameId: 8104,
    rarityId: 3,
  },
  {
    name: "Golden Bloat Oat",
    slug: "golden_bloat_oat",
    foodValue: 42,
    hps: 12.1,
    icon_url:
      "https://corekeeper.atma.gg/english/images/a/a2/Golden_Bloat_Oat.png",
    hpBoost: null,
    variation: null,
    ingameId: 8105,
    rarityId: 3,
  },
  {
    name: "Golden Pewpaya",
    slug: "golden_pewpaya",
    foodValue: 21,
    hps: 4.1,
    icon_url:
      "https://corekeeper.atma.gg/english/images/3/37/Golden_Pewpaya.png",
    hpBoost: null,
    variation: null,
    ingameId: 8106,
    rarityId: 3,
  },
  {
    name: "Golden Pinegrapple",
    slug: "golden_pinegrapple",
    foodValue: 21,
    hps: 4.5,
    icon_url:
      "https://corekeeper.atma.gg/english/images/1/11/Golden_Pinegrapple.png",
    hpBoost: null,
    variation: null,
    ingameId: 8107,
    rarityId: 3,
  },
  {
    name: "Golden Grumpkin",
    slug: "golden_grumpkin",
    foodValue: 18,
    hps: 3.1,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/50/Golden_Grumpkin.png",
    hpBoost: null,
    variation: null,
    ingameId: 8108,
    rarityId: 1,
  },
  {
    name: "Blue Cave Guppy",
    slug: "blue_cave_guppy",
    foodValue: 21,
    hps: 2.2,
    icon_url:
      "https://corekeeper.atma.gg/english/images/0/0c/Blue_Cave_Guppy.png",
    hpBoost: null,
    variation: null,
    ingameId: 9701,
    rarityId: 1,
  },
  {
    name: "Orange Cave Guppy",
    slug: "orange_cave_guppy",
    foodValue: 19,
    hps: 2.1,
    icon_url:
      "https://corekeeper.atma.gg/english/images/0/00/Orange_Cave_Guppy.png",
    hpBoost: null,
    variation: null,
    ingameId: 9700,
    rarityId: 1,
  },
  {
    name: "Rock Jaw",
    slug: "rock_jaw",
    foodValue: 22,
    hps: 2.5,
    icon_url: "https://corekeeper.atma.gg/english/images/3/3b/Rock_Jaw.png",
    hpBoost: null,
    variation: null,
    ingameId: 9702,
    rarityId: 2,
  },
  {
    name: "Gem Crab",
    slug: "gem_crab",
    foodValue: 21,
    hps: 3.1,
    icon_url: "https://corekeeper.atma.gg/english/images/c/ca/Gem_Crab.png",
    hpBoost: null,
    variation: null,
    ingameId: 9703,
    rarityId: 3,
  },
  {
    name: "Green Blister Head",
    slug: "green_blister_head",
    foodValue: 20,
    hps: 2.5,
    icon_url:
      "https://corekeeper.atma.gg/english/images/f/f3/Green_Blister_Head.png",
    hpBoost: null,
    variation: null,
    ingameId: 9709,
    rarityId: 1,
  },
  {
    name: "Yellow Blister Head",
    slug: "yellow_blister_head",
    foodValue: 21,
    hps: 2.6,
    icon_url:
      "https://corekeeper.atma.gg/english/images/1/10/Yellow_Blister_Head.png",
    hpBoost: null,
    variation: null,
    ingameId: 9708,
    rarityId: 1,
  },
  {
    name: "Devil Worm",
    slug: "devil_worm",
    foodValue: 20,
    hps: 3,
    icon_url: "https://corekeeper.atma.gg/english/images/1/16/Devil_Worm.png",
    hpBoost: null,
    variation: null,
    ingameId: 9710,
    rarityId: 2,
  },
  {
    name: "Vampire Eel",
    slug: "vampire_eel",
    foodValue: 21,
    hps: 3.5,
    icon_url: "https://corekeeper.atma.gg/english/images/6/6b/Vampire_Eel.png",
    hpBoost: null,
    variation: null,
    ingameId: 9711,
    rarityId: 3,
  },
  {
    name: "Dagger Fin",
    slug: "dagger_fin",
    foodValue: 21,
    hps: 3.9,
    icon_url: "https://corekeeper.atma.gg/english/images/b/ba/Dagger_Fin.png",
    hpBoost: null,
    variation: null,
    ingameId: 9704,
    rarityId: 1,
  },
  {
    name: "Pink Palace Fish",
    slug: "pink_palace_fish",
    foodValue: 22,
    hps: 3.9,
    icon_url:
      "https://corekeeper.atma.gg/english/images/e/ea/Pink_Palace_Fish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9705,
    rarityId: 2,
  },
  {
    name: "Teal Palace Fish",
    slug: "teal_palace_fish",
    foodValue: 21,
    hps: 4,
    icon_url:
      "https://corekeeper.atma.gg/english/images/e/e6/Teal_Palace_Fish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9706,
    rarityId: 2,
  },
  {
    name: "Crown Squid",
    slug: "crown_squid",
    foodValue: 19,
    hps: 5,
    icon_url: "https://corekeeper.atma.gg/english/images/c/c4/Crown_Squid.png",
    hpBoost: null,
    variation: null,
    ingameId: 9707,
    rarityId: 4,
  },
  {
    name: "Azure Feather Fish",
    slug: "azure_feather_fish",
    foodValue: 21,
    hps: 8.1,
    icon_url:
      "https://corekeeper.atma.gg/english/images/a/a4/Azure_Feather_Fish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9715,
    rarityId: 1,
  },
  {
    name: "Emerald Feather Fish",
    slug: "emerald_feather_fish",
    foodValue: 20,
    hps: 3,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/ce/Emerald_Feather_Fish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9716,
    rarityId: 1,
  },
  {
    name: "Spirit Veil",
    slug: "spirit_veil",
    foodValue: 19,
    hps: 0,
    icon_url: "https://corekeeper.atma.gg/english/images/5/5f/Spirit_Veil.png",
    hpBoost: null,
    variation: null,
    ingameId: 9717,
    rarityId: 1,
  },
  {
    name: "Astral Jelly",
    slug: "astral_jelly",
    foodValue: 21,
    hps: 5.2,
    icon_url: "https://corekeeper.atma.gg/english/images/2/29/Astral_Jelly.png",
    hpBoost: null,
    variation: null,
    ingameId: 9718,
    rarityId: 3,
  },
  {
    name: "Mold Shark",
    slug: "mold_shark",
    foodValue: 21,
    hps: 4.8,
    icon_url: "https://corekeeper.atma.gg/english/images/d/d8/Mold_Shark.png",
    hpBoost: null,
    variation: null,
    ingameId: 9712,
    rarityId: 1,
  },
  {
    name: "Rot Fish",
    slug: "rot_fish",
    foodValue: 21,
    hps: 0,
    icon_url: "https://corekeeper.atma.gg/english/images/6/62/Rot_Fish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9713,
    rarityId: 1,
  },
  {
    name: "Black Steel Urchin",
    slug: "black_steel_urchin",
    foodValue: 19,
    hps: 3.6,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/5e/Black_Steel_Urchin.png",
    hpBoost: null,
    variation: null,
    ingameId: 9714,
    rarityId: 3,
  },
  {
    name: "Bottom Tracer",
    slug: "bottom_tracer",
    foodValue: 20,
    hps: 5.8,
    icon_url:
      "https://corekeeper.atma.gg/english/images/6/6c/Bottom_Tracer.png",
    hpBoost: null,
    variation: null,
    ingameId: 9719,
    rarityId: 1,
  },
  {
    name: "Silver Dart",
    slug: "silver_dart",
    foodValue: 21,
    hps: 5.5,
    icon_url: "https://corekeeper.atma.gg/english/images/1/16/Silver_Dart.png",
    hpBoost: null,
    variation: null,
    ingameId: 9720,
    rarityId: 2,
  },
  {
    name: "Golden Dart",
    slug: "golden_dart",
    foodValue: 22,
    hps: 5.7,
    icon_url: "https://corekeeper.atma.gg/english/images/f/f6/Golden_Dart.png",
    hpBoost: null,
    variation: null,
    ingameId: 9721,
    rarityId: 2,
  },
  {
    name: "Pink Coralotl",
    slug: "pink_coralotl",
    foodValue: 22,
    hps: 7,
    icon_url:
      "https://corekeeper.atma.gg/english/images/b/b1/Pink_Coralotl.png",
    hpBoost: null,
    variation: null,
    ingameId: 9722,
    rarityId: 3,
  },
  {
    name: "White Coralotl",
    slug: "white_coralotl",
    foodValue: 19,
    hps: 5.8,
    icon_url:
      "https://corekeeper.atma.gg/english/images/0/05/White_Coralotl.png",
    hpBoost: null,
    variation: null,
    ingameId: 9723,
    rarityId: 3,
  },
  {
    name: "Solid Spikeback",
    slug: "solid_spikeback",
    foodValue: 21,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/9/9d/Solid_Spikeback.png",
    hpBoost: null,
    variation: null,
    ingameId: 9724,
    rarityId: 1,
  },
  {
    name: "Sandy Spikeback",
    slug: "sandy_spikeback",
    foodValue: 19,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/8/83/Sandy_Spikeback.png",
    hpBoost: null,
    variation: null,
    ingameId: 9725,
    rarityId: 1,
  },
  {
    name: "Grey Dune Tail",
    slug: "grey_dune_tail",
    foodValue: 20,
    hps: 6.7,
    icon_url:
      "https://corekeeper.atma.gg/english/images/8/80/Grey_Dune_Tail.png",
    hpBoost: null,
    variation: null,
    ingameId: 9726,
    rarityId: 3,
  },
  {
    name: "Brown Dune Tail",
    slug: "brown_dune_tail",
    foodValue: 21,
    hps: 8.1,
    icon_url:
      "https://corekeeper.atma.gg/english/images/7/7e/Brown_Dune_Tail.png",
    hpBoost: null,
    variation: null,
    ingameId: 9727,
    rarityId: 3,
  },
  {
    name: "Tornis Kingfish",
    slug: "tornis_kingfish",
    foodValue: 20,
    hps: 7.8,
    icon_url:
      "https://corekeeper.atma.gg/english/images/6/68/Tornis_Kingfish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9728,
    rarityId: 4,
  },
  {
    name: "Dark Lava Eater",
    slug: "dark_lava_eater",
    foodValue: 19,
    hps: 7.8,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/5a/Dark_Lava_Eater.png",
    hpBoost: null,
    variation: null,
    ingameId: 9729,
    rarityId: 2,
  },
  {
    name: "Bright Lava Eater",
    slug: "bright_lava_eater",
    foodValue: 20,
    hps: 7.1,
    icon_url:
      "https://corekeeper.atma.gg/english/images/5/55/Bright_Lava_Eater.png",
    hpBoost: null,
    variation: null,
    ingameId: 9730,
    rarityId: 2,
  },
  {
    name: "Verdant Dragonfish",
    slug: "verdant_dragonfish",
    foodValue: 21,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/cf/Verdant_Dragonfish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9731,
    rarityId: 3,
  },
  {
    name: "Elder Dragonfish",
    slug: "elder_dragonfish",
    foodValue: 19,
    hps: 0,
    icon_url:
      "https://corekeeper.atma.gg/english/images/3/34/Elder_Dragonfish.png",
    hpBoost: null,
    variation: null,
    ingameId: 9732,
    rarityId: 3,
  },
  {
    name: "Starlight Nautilus",
    slug: "starlight_nautilus",
    foodValue: 21,
    hps: 17.7,
    icon_url:
      "https://corekeeper.atma.gg/english/images/c/c3/Starlight_Nautilus.png",
    hpBoost: 100,
    variation: null,
    ingameId: 9733,
    rarityId: 5,
  },
];

export default async function foodSeed() {
  await prisma.food.deleteMany();

  return await prisma.food.createMany({
    data,
  });
}
