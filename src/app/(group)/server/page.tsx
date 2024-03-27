import { UsersList } from "@/app/_components/users-list";
import { TUser, getDataList } from "@/lib/fake-api";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default async function ServerPage() {
  const data: TUser[] = await getDataList("users").then((json) => json);

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <h1 className="text-4xl font-bold mb-4">Server Page</h1>
      <UsersList data={data} />
    </div>
  );
}
