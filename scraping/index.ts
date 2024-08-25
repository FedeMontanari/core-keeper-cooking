import fs from "node:fs";
import Cookbook from "./Cookbook.json";
import Buffs from "./BuffIDs.json";

type CookbookType = {
  name: string;
  stats: string;
  variation: number;
};

type BuffType = {
  name: string;
  slug: string;
};

function parseCookbook() {
  const arr: CookbookType[] = [];

  Cookbook.forEach((it) => {
    if (arr.some((v) => v.name === it.name)) return;
    arr.push(it);
  });

  try {
    fs.writeFileSync(
      "./scraping/cookbook-out.json",
      JSON.stringify(arr),
      "utf-8"
    );
  } catch (err) {
    console.error(err);
    throw new Error("Error parsing Cookboon.json");
  }
}

function parseBuffs() {
  const arr: BuffType[] = [];
  Buffs.forEach((it) => {
    const slug = it.name.toLowerCase().replaceAll(" ", "_");
    arr.push({
      name: it.name,
      slug,
    });
  });

  try {
    fs.writeFileSync("./scraping/buffs-out.json", JSON.stringify(arr), "utf-8");
  } catch (err) {
    console.error(err);
    throw new Error("Error parsing Cookboon.json");
  }
}

function main() {
  parseCookbook();
  parseBuffs();
}

main();
