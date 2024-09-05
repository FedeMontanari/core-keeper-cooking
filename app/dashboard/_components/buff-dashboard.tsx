import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { prisma } from "@/lib/prisma";
import React from "react";

export default async function BuffDashboard() {
  const values = await prisma.buffType.findMany();
  return (
    <section className="flex flex-col items-center justify-center pb-8">
      <h3 className="text-xl font-bold py-5">Buff types</h3>
      <Table className="w-3/4 border rounded-lg mx-auto bg-black">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {values.map((v, i) => (
            <TableRow key={i}>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.slug}</TableCell>
              <TableCell>{v.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
