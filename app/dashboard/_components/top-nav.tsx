import { Button } from "@/components/ui/button";
import Link from "next/link";

const links = [
  {
    href: "/dashboard/food",
    text: "Food",
  },
  {
    href: "/dashboard/buff",
    text: "Buffs",
  },
  {
    href: "/dashboard/rarity",
    text: "Rarity",
  },
];

export default function TopNav() {
  return (
    <nav className="w-full flex items-center justify-between px-5 bg-secondary">
      <Button asChild variant="link">
        <Link href="/">Home</Link>
      </Button>
      <ul className="flex gap-x-3">
        {links.map((it, i) => (
          <li key={i}>
            <Button asChild variant="link">
              <Link href={it.href}>{it.text}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
