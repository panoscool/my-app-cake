"use client";

import { UsersDetails } from "@/app/_components/user-details";
import { TUser, getDataById } from "@/lib/fake-api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServerPage() {
  const params: { id: string } = useParams();
  const [data, setData] = useState<TUser | null>(null);

  useEffect(() => {
    getDataById("users", params.id).then((json) => setData(json));
  }, [params.id]);

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg border-2 border-sky-600 dark:text-black">
      <h1 className="text-4xl font-bold mb-6">Server Page {params.id}</h1>
      <UsersDetails data={data} />
    </div>
  );
}
