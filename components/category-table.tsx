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
import type { Category } from "@/constants/food";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import { Input } from "./ui/input";

interface TableCaption {
  show: boolean;
  content: string;
}

export default function CategoryTable({
  category,
  caption,
  searchbar,
  ...props
}: {
  category: Category[];
  caption?: TableCaption;
  searchbar?: boolean;
}) {
  const [sortValue, setSortValue] = useState("");
  const [searchArr, setSearchArr] = useState(category);

  switch (sortValue) {
    case "asc":
      category.sort((a, b) => {
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
      category.sort((a, b) => {
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
      category.sort((a, b) => a.rarity - b.rarity);
      break;

    case "rarity-desc":
      category.sort((a, b) => b.rarity - a.rarity);
      break;

    default:
      break;
  }

  const searchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setSearchArr(category);
    }
    setSearchArr(
      category.filter((cat) =>
        cat.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="flex flex-row flex-nowrap items-center justify-center gap-3">
        {searchbar && (
          <Input
            onChange={searchBarChange}
            type="text"
            placeholder="Search by Name..."
            className="w-1/2 self-end"
          />
        )}
        <div className="flex flex-col flex-nowrap items-center justify-center">
          <span>Sort by </span>
          <Select onValueChange={(v) => setSortValue(v)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">A-Z</SelectItem>
              <SelectItem value="asc">Z-A</SelectItem>
              <SelectItem value="rarity-asc">Rarity Asc.</SelectItem>
              <SelectItem value="rarity-desc">Rarity Desc.</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table>
        {caption?.show && <TableCaption>{caption.content}</TableCaption>}
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Buff</TableHead>
            <TableHead>Wiki Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {searchArr?.map((f, i) => {
            return (
              <TableRow key={i}>
                <TableCell className="flex flex-row items-center gap-2">
                  <Image src={f.icon} alt="Icon" width={32} height={32} />
                  <span className={`rarity-${f.rarity}`}>{f.name}</span>
                </TableCell>
                <TableCell>{f.buff}</TableCell>
                <TableCell className="flex items-center justify-center">
                  <a
                    href={`https://core-keeper.fandom.com/wiki/${f.name
                      .split(" ")
                      .join("_")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                  </a>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
