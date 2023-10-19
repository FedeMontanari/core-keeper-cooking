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
    name: "Combat",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/2/27/Copper_Sword.png",
    url: "combat",
  },
  {
    name: "Skills",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/c/c6/Golden_Starfish.png",
    url: "skills",
  },
  {
    name: "Movement",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/9/9a/Gotta_go_fast!.png",
    url: "movement",
  },
  {
    name: "Vitality",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/5/58/Healing_potency.png",
    url: "vitality",
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
            with <span className="text-red-600">&lt;3</span> as an alternative to the in-game recipes book.
          </p>
        </div>
        <div className="infocard w-11/12 h-fit flex flex-col items-center justify-center">
          <h3 className="text-2xl">Select a category</h3>
          <ul className="flex flex-row items-center justify-evenly mt-5 w-full h-fit">
            {categories.map((c, i) => {
              return (
                <li key={i} className="flex flex-col items-center text-center">
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
        <div className="infocard-fancy w-11/12 h-fit flex flex-col items-center justify-center mb-5">
          <p className="text-lg">Game Links:</p>
          <ul className="flex flex-row justify-evenly w-full mt-4">
            {contact.map((c, i) => {
              return (
                <li key={i}>
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
          <p className="mt-5">
            Images and assets obtained from:{" "}
            <Link
              href="https://core-keeper.fandom.com/wiki/Core_Keeper_Wiki"
              className="font-bold border-b"
            >
              The Core Keeper Wiki
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
