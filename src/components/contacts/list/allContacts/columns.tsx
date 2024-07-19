"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { Button } from "@/components/ui/button";
import {
  Mail,
  MailOpen,
  MapPin,
  Phone
} from "lucide-react";
import { contactType } from "../../../../../types";
import { DataTableColumnHeader } from "./dataTableColumnHeader";
import { DataTableRowActions } from "./dataTableRowActions";

export const columns: ColumnDef<contactType>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      return (
        <div className="w-max text-xs flex flex-row gap-x-2 items-center">
          <Avatar className="w-7 h-7">
            <AvatarImage alt={name} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((chunk: any) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {name}
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => (
      <div className="w-max text-xs">
        <Mail className="mr-2 h-4 w-4 inline text-muted-foreground" />
        <span className="underline">{row.getValue("email")}</span>
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => (
      <div className="w-max text-xs text-muted-foreground">
        <Phone className="mr-1 h-4 w-4 inline" /> {row.getValue("phone")}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    cell: ({ row }) => {
      const category: string = row.getValue("category");
      return (
        <div className="w-max text-xs">
          <Badge
            className={`rounded-md ${
              category === "Employee"
                ? "bg-purple-200 text-purple-700"
                : category === "Customer"
                ? "bg-blue-200 text-blue-700"
                : "bg-yellow-50 text-yellow-500"
            }`}
          >
            {category}
          </Badge>
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Location" />
    ),
    cell: ({ row }) => (
      <div className="w-max text-xs text-muted-foreground">
        <MapPin className="mr-1 h-4 w-4 inline" /> {row.getValue("location")}
      </div>
    ),
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Gender" />
    ),
    cell: ({ row }) => {
      const gender: string = row.getValue("gender");
      return (
        <div className="w-max text-xs flex flex-row gap-1 text-muted-foreground items-center">
          {gender === "Male" ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className=" w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  d="M12.6066 10.8388C10.654 8.88621 7.48813 8.88621 5.53551 10.8388C3.58289 12.7915 3.58289 15.9573 5.53551 17.9099C7.48813 19.8625 10.654 19.8625 12.6066 17.9099C14.5592 15.9573 14.5592 12.7915 12.6066 10.8388ZM12.6066 10.8388L15.435 8.01041L17.9099 5.53553M17.9099 5.53553V10.4853M17.9099 5.53553H12.9601"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              viewBox="0 0 1024 1024"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="#64748b"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#64748b"
                  d="M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
                ></path>
                <path
                  fill="#64748b"
                  d="M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
                ></path>
                <path
                  fill="#64748b"
                  d="M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
                ></path>
              </g>
            </svg>
          )}
          {gender}
        </div>
      );
    },
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Action" />
    ),
    cell: ({ row }) => (
      <div className="w-max flex flex-row text-xs gap-x-2">
        <Button
          variant="outline"
          className="w-max h-8 text-xs border-gray-600 py-1"
        >
          <Phone className="mr-2 h-4 w-4" /> Call
        </Button>
        <Button
          variant="outline"
          className="w-max h-8 text-xs border-gray-600 py-1"
        >
          <MailOpen className="mr-2 h-4 w-4" /> Mail
        </Button>
        <DataTableRowActions row={row} />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
