import { UsersList } from "@/components/user/users-list";
import { getData } from "@/lib/fetch-api";
import { TUser } from "@/types/common";

export default async function ServerPage() {
  const data: TUser[] = await getData("users", { next: { revalidate: 10 } }).then(
    (json) => json.data
  );

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <h1 className="text-4xl font-bold mb-4">Server Page</h1>
      <UsersList data={data} />
    </div>
  );
}
