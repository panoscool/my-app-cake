"use client";

import { UsersDetails } from "@/components/user/user-details";
import { getDataById } from "@/lib/fetch-api";
import { useParams } from "next/navigation";
import useSWR from "swr";

export default function ClientPage() {
  const params: { id: string } = useParams();
  const { data, isLoading } = useSWR(["user", params.id], ([, id]) =>
    getDataById("users", id).then((json) => json.data)
  );

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg border-2 dark:text-black">
      <h1 className="text-4xl font-bold mb-6">Client Page {params.id}</h1>
      <UsersDetails isLoading={isLoading} data={data} />
    </div>
  );
}
