"use client";

import { UsersList } from "@/app/_components/users-list";
import { TUser, getDataList } from "@/lib/fake-api";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [data, setData] = useState<TUser[]>([]);

  useEffect(() => {
    getDataList("users").then((json) => setData(json));
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <h1 className="text-4xl font-bold mb-4">Client Page</h1>
      <UsersList data={data} />
    </div>
  );
}
