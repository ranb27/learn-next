"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function DataTable({ data }) {
  console.log("pokeData", data);

  return (
    <div className="w-full">
      <Table
        aria-label="Example static collection table"
        className="h-[500px] w-[600px]"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>URL</TableColumn>
        </TableHeader>
        <TableBody>
          {data.map((poke, index) => (
            <TableRow key={index}>
              <TableCell>{poke.name}</TableCell>
              <TableCell>{poke.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
