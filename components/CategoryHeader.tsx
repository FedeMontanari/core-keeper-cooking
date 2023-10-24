import Image from "next/image";
import Link from "next/link";

export default function CategoryHeader({ catName }: { catName: string }) {
  return (
    <header className="flex flex-row w-full h-fit items-center justify-center gap-4 border-b bg-primary-foreground fixed z-50">
      <Link href="/" className="absolute left-6">
        &lt;&lt; Home
      </Link>
      <Image
        src={
          "https://static.wikia.nocookie.net/core-keeper/images/a/a9/Core_Keeper_logo.png"
        }
        alt="Game Logo"
        width={100}
        height={50}
      />
      <h1 className="text-2xl font-bold">{catName} Food</h1>
    </header>
  );
}
