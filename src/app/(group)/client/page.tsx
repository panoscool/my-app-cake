"use client";

import { UsersList } from "@/components/user/users-list";
import { getData } from "@/lib/fetch-api";
import { TUser } from "@/types/common";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [data, setData] = useState<TUser[]>([]);

  useEffect(() => {
    getData("users").then((json) => {
      setData(json.data);
    });
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <h1 className="text-4xl font-bold mb-4">Client Page</h1>

      {!data.length && <p>Loading...</p>}
      <UsersList data={data} />
    </div>
  );
}
