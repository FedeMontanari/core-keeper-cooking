import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function FoodDashboard() {
  const values = await prisma.food.findMany();
  return (
    <section className="flex flex-col items-center justify-center pb-8">
      <h3 className="text-xl font-bold py-5">Food Items</h3>
      <Table className="w-3/4 border rounded-lg mx-auto bg-black">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {values.map((v, i) => (
            <TableRow key={i}>
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
                      <Link href={`/dashboard/food/${v.id}`}>Edit</Link>
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
    </section>
  );
}
