import { UsersDetails } from "@/components/user/user-details";
import { getDataById } from "@/lib/fetch-api";
import { TUser } from "@/types/common";

export default async function ServerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data: TUser = await getDataById("users", id).then((json) => json.data);

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg border-2 dark:text-black">
      <h1 className="text-4xl font-bold mb-6">Server Page {id}</h1>
      <UsersDetails data={data} />
    </div>
  );
}
