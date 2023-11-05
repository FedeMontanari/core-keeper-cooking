import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import simpleIconspath from "@/util/simpleIconsPath";

interface NameUrl {
  name: string;
  icon_url: string;
  url: string;
}

const categories: NameUrl[] = [
  {
    name: "Offensive",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/c/c7/Iron_Sword.png/revision/latest?cb=20220313022945",
    url: "offensive",
  },
  {
    name: "Defensive",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/f/ff/Iron_Shield.png/revision/latest?cb=20231004093911",
    url: "defensive",
  },
  {
    name: "Skills",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/c/c6/Golden_Starfish.png",
    url: "skills",
  },
  {
    name: "Miscellaneous",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/b/b8/Recall_Idol.png/revision/latest?cb=20220313041921",
    url: "misc",
  },
];

const contact: NameUrl[] = [
  {
    name: "Steam",
    icon_url: "siSteam",
    url: "https://store.steampowered.com/app/1621690/Core_Keeper/",
  },
  {
    name: "Discord",
    icon_url: "siDiscord",
    url: "https://discord.gg/corekeeper/",
  },
  {
    name: "Twitter",
    icon_url: "siTwitter",
    url: "https://twitter.com/CoreKeeperGame",
  },
  {
    name: "Youtube",
    icon_url: "siYoutube",
    url: "https://www.youtube.com/channel/UCfnfwO-3cN97ZCZYLOWxjTg/",
  },
  {
    name: "TikTok",
    icon_url: "siTiktok",
    url: "https://www.tiktok.com/@corekeepergame/",
  },
];

const tools: NameUrl[] = [
  {
    name: "Calculator",
    url: "calculator",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/3/36/Admin_Key.png/revision/latest?cb=20220615093300",
  },
  {
    name: "Full List",
    url: "list",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/e/e6/Cipher_Parchment.png",
  },
];

export default function Home() {
  return (
    <main className="w-full h-full flex items-center justify-start flex-col">
      <header className="flex flex-col items-center w-fit h-fit">
        <Image
          src={
            "https://static.wikia.nocookie.net/core-keeper/images/a/a9/Core_Keeper_logo.png"
          }
          alt="Game Logo"
          width={350}
          height={197}
        />
        <h1 className="text-3xl font-bold border-b w-fit">Cooking Guide</h1>
      </header>
      <section className="w-full flex flex-col items-center gap-5">
        <div className="infocard-fancy w-11/12 h-fit mt-10">
          <p className="text-lg text-center">
            Welcome to the Ultimate Core Keeper Cooking Guide! <br /> Fanmade
            with <span className="text-red-600">&lt;3</span> as an alternative
            to the in-game recipes book.
          </p>
        </div>
        <div className="infocard w-11/12 h-fit">
          <p className="text-center text-lg">
            <span className="border-b">How to use:</span>
            <br />
            All food items give a base food value plus a Health per second buff,
            this guide only covers (mostly) the bonus buff, which you get by
            cooking said item.
            <br />
            <br />
            <span className="border-b">For example:</span>
            <br />
            If you cook a{" "}
            <span className="bg-secondary rarity-common py-1">
              <Image
                alt="icon"
                src="https://static.wikia.nocookie.net/core-keeper/images/8/8c/Mushroom.png/revision/latest?cb=20220402051337"
                height={24}
                width={24}
                className="inline"
              />
              Mushroom
            </span>{" "}
            with a{" "}
            <span className="bg-secondary rarity-common py-1">
              <Image
                alt="icon"
                src="https://static.wikia.nocookie.net/core-keeper/images/d/da/Heart_Berry.png/revision/latest?cb=20220215171902"
                height={24}
                width={24}
                className="inline"
              />
              Heart Berry
            </span>{" "}
            the result food will have 4.2 HP/sec and +25 Max Health (From
            Mushroom and Heart Berry respectively).
            <br />
            <br />
            <span className="border-b">Notes:</span>
            <br />
            Items that share the same buff do NOT stack with each other, meaning
            if you combine 2 items that give Mining Damage, the final product
            will have the highest value of the two ingredients.
          </p>
        </div>
        <div className="flex flex-row w-11/12 h-fit flex-nowrap gap-3">
          <div className="infocard w-11/12 h-fit flex flex-col items-center justify-center">
            <h3 className="text-2xl">Tools</h3>
            <ul className="flex flex-row items-center justify-evenly mt-5 w-full h-fit flex-wrap">
              {tools.map((c, i) => {
                return (
                  <li
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="content-icon w-fit h-fit p-2">
                      <Link href={`/tools/${c.url}`}>
                        <Image
                          src={c.icon_url}
                          alt="Category Icon"
                          width={64}
                          height={64}
                        />
                      </Link>
                    </div>
                    <p>{c.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="infocard w-11/12 h-fit flex flex-col items-center justify-center">
            <h3 className="text-2xl">Find by category</h3>
            <ul className="flex flex-row items-center justify-evenly mt-5 w-full h-fit flex-wrap">
              {categories.map((c, i) => {
                return (
                  <li
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="content-icon w-fit h-fit p-2">
                      <Link href={`/category/${c.url}`}>
                        <Image
                          src={c.icon_url}
                          alt="Category Icon"
                          width={64}
                          height={64}
                        />
                      </Link>
                    </div>
                    <p>{c.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="infocard-fancy w-11/12 h-fit flex flex-col items-center justify-center mb-5">
          <p className="text-lg">Official Game Links:</p>
          <ul className="flex flex-row justify-evenly w-full mt-4 flex-wrap">
            {contact.map((c, i) => {
              return (
                <li key={i} className="p-3 rounded-xl hover:bg-secondary">
                  <a
                    href={c.url}
                    className="flex flex-col-reverse items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{c.name}</span>
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="30px"
                      height="30px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{c.name}</title>
                      <path d={simpleIconspath(c.icon_url)}></path>
                    </svg>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col justify-center items-center">
            <p className="mt-5">Images, assets and data obtained from:</p>
            <ul className="text-center">
              <li>
                <a
                  href="https://core-keeper.fandom.com/wiki/Core_Keeper_Wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold border-b hover:text-blue-500"
                >
                  The Fandom Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://corekeeper.atma.gg/en/Core_Keeper_Wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold border-b hover:text-blue-500"
                >
                  The Atma Wiki
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
