import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import simpleIconspath from "@/util/simpleIconsPath";
import { categories, contact, tools } from "@/constants/landing";

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
        <p className="text-muted-foreground italic pt-2 -mb-4">
          Under maintenance
        </p>
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
          <div className="text-center text-lg">
            <span className="border-b font-bold">How it Works:</span>
            <br />
            If you cook a{" "}
            <span className="rarity-common py-1">
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
            <span className="rarity-common py-1">
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
            Mushroom and Heart Berry respectively) plus a food value.
            <br />
            <br />
            <span className="border-b font-bold">Notes:</span>
            <div>
              <ul className="list-disc px-5 py-3">
                <li>
                  Items that share the same buff do NOT stack with each other,
                  meaning if you combine 2 items that give Mining Damage, the
                  final dish will have the highest value of the two ingredients.
                </li>
                <br />
                <li>
                  There also exists a variation of the finished dish that has
                  increased stats which you can get by getting the{" "}
                  <a
                    href="https://corekeeper.atma.gg/en/Master_chef"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold border-b hover:text-blue-500"
                  >
                    Master Chef
                  </a>{" "}
                  talent.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-11/12 h-fit flex-nowrap gap-3">
          <div className="infocard w-11/12 h-fit flex flex-col items-center justify-center relative">
            <h3 className="text-2xl">Tools</h3>
            <div className="absolute -inset-5 bg-black/90 flex items-center justify-center text-center rounded">
              <p>Under development, come back soon!</p>
            </div>
            <ul className="flex flex-row items-center justify-evenly mt-5 w-full h-fit flex-wrap">
              {tools.map((c, i) => {
                return (
                  <li
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <Link className="content-icon w-fit h-fit p-2" href="/">
                      <Image
                        src={c.icon_url}
                        alt="Category Icon"
                        width={64}
                        height={64}
                      />
                    </Link>
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
                    <Link
                      className="content-icon w-fit h-fit p-1"
                      href={`/category/${c.url}`}
                    >
                      <Image
                        src={c.icon_url}
                        alt="Category Icon"
                        width={64}
                        height={64}
                      />
                    </Link>
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
            <p className="mt-5">Images, assets and data</p>
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
