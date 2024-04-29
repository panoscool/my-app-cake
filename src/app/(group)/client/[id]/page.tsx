"use client";

import { UsersDetails } from "@/components/user/user-details";
import { getDataById } from "@/lib/fetch-api";
import { TUser } from "@/types/common";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServerPage() {
  const params: { id: string } = useParams();
  const [data, setData] = useState<TUser | null>(null);

  useEffect(() => {
    getDataById("users", params.id).then((json) => setData(json.data));
  }, [params.id]);

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg border-2 dark:text-black">
      <h1 className="text-4xl font-bold mb-6">Server Page {params.id}</h1>
      <UsersDetails data={data} />
    </div>
  );
}
