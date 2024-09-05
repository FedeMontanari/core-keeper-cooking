"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Buff, Food } from "@prisma/client";
import type { BuffType } from "@/types/food-buffs";
import { Button } from "./ui/button";

interface TableCaption {
  show: boolean;
  content: string;
}

interface FoodBuff extends Food {
  buffs: Buff[];
}

export default function FullListTable({
  list,
  buffTypes,
  caption,
  searchbar,
  ...props
}: {
  list: FoodBuff[];
  caption?: TableCaption;
  searchbar?: boolean;
  buffTypes?: BuffType[];
}) {
  const [sortValue, setSortValue] = useState("");
  const [searchArr, setSearchArr] = useState(list);

  switch (sortValue) {
    case "asc":
      list.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      break;

    case "desc":
      list.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      break;

    case "rarity-asc":
      list.sort((a, b) => a.rarity_id - b.rarity_id);
      break;

    case "rarity-desc":
      list.sort((a, b) => b.rarity_id - a.rarity_id);
      break;

    default:
      break;
  }

  const searchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setSearchArr(list);
    }
    setSearchArr(
      list.filter((f) =>
        f.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="flex flex-row flex-nowrap items-center justify-center gap-3">
        <div className="flex flex-col flex-nowrap items-center justify-center">
          <Select onValueChange={(v) => setSortValue(v)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">A-Z</SelectItem>
              <SelectItem value="asc">Z-A</SelectItem>
              <SelectItem value="rarity-asc">Rarity Asc.</SelectItem>
              <SelectItem value="rarity-desc">Rarity Desc.</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {searchbar && (
          <Input
            onChange={searchBarChange}
            type="text"
            placeholder="Search by Name..."
            className="w-1/2 self-end"
          />
        )}
      </div>
      <Table>
        {caption?.show && <TableCaption>{caption.content}</TableCaption>}
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Food Value</TableHead>
            <TableHead>Buff</TableHead>
            <TableHead>Wiki Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {searchArr?.map((f, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <Image
                    className="inline mr-2"
                    src={f.icon_url}
                    alt="Icon"
                    width={32}
                    height={32}
                  />
                  <span className={`rarity-${f.rarity_id}`}>{f.name}</span>
                </TableCell>
                <TableCell>+{f.food_value} Food</TableCell>
                <TableCell>
                  <ul>
                    {f.buffs?.map((b) => {
                      const buffType = buffTypes?.find(
                        (bt) => bt.id === b.buff_type_id
                      );
                      const value = b.value ? `+${b.value} ` : "";
                      return (
                        <li key={b.id}>
                          {`${value}${buffType?.name} for ${b.duration} min.`}
                        </li>
                      );
                    })}
                  </ul>
                </TableCell>
                <TableCell className="p-0 text-center">
                  <Button asChild variant="link" className="p-0">
                    <a
                      href={`https://core-keeper.fandom.com/wiki/${f.name
                        .split(" ")
                        .join("_")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
