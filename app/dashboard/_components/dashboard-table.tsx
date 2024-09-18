"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BuffType } from "@/prisma/zod/modelSchema/BuffTypeSchema";
import { Food } from "@/prisma/zod/modelSchema/FoodSchema";
import { Rarity } from "@/prisma/zod/modelSchema/RaritySchema";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardTable({
  data,
  name,
}: {
  data: Food[] | BuffType[] | Rarity[];
  name: "Food" | "Buffs" | "Rarity";
}) {
  const [searchArr, setSearchArr] = useState<Food[] | BuffType[] | Rarity[]>(
    data
  );
  let title = "Title";
  switch (name) {
    case "Buffs":
      title = "Buff Types";
      break;
    case "Food":
      title = "Food Items";
      break;

    case "Rarity":
      title = "Rarity Values";
      break;

    default:
      break;
  }

  function searchBarChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      setSearchArr(data);
    }
    setSearchArr(
      data.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  return (
    <section className="flex flex-col items-center justify-center pb-8">
      <h3 className="text-xl font-bold py-5">{title}</h3>
      <div className="infocard-fancy w-3/4">
      <Input
        onChange={searchBarChange}
        type="text"
        placeholder="Search by Name..."
        className="w-[300px]"
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {searchArr.map((v) => (
            <TableRow key={v.id}>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.slug}</TableCell>
              <TableCell>{v.name}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/${name.toLowerCase()}/${v.id}`}>
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </section>
  );
}
