"use client";

import { TUser } from "@/lib/fake-api";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const UsersList = ({ data }: { data: TUser[] }) => {
  const pathname = usePathname();

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href={`${pathname}/${user.id}`} className="flex flex-col">
            <span>{user.name}</span>
            <span className="text-sm text-slate-400 mb-2">{user.email}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
