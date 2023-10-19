import Image from "next/image";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LinkIcon } from "lucide-react";
import { Category } from "@/types/Category";

interface TableCaption {
  show: boolean;
  content: string;
}

export default function CategoryTable({
  category,
  caption,
  ...props
}: {
  category: Category[];
  caption?: TableCaption;
}) {
  return (
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
        {category?.map((f, i) => {
          return (
            <TableRow key={i}>
              <TableCell className="flex flex-row items-center gap-2">
                <Image src={f.icon} alt="Icon" width={32} height={32} />
                {f.name}
              </TableCell>
              <TableCell>{f.buff}</TableCell>
              <TableCell>
                <a
                  href={`https://core-keeper.fandom.com/wiki/${f.name
                    .split(" ")
                    .join("_")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkIcon />
                </a>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
