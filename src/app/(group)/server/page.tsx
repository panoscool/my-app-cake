import { UsersList } from "@/components/user/users-list";
import { simulateFetch } from "@/lib/fetch-sim";

export default async function ServerPage() {
  const { data } = await simulateFetch("users", undefined, { simulateDelayMs: 200 });

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <h1 className="text-4xl font-bold mb-4">Server Page</h1>
      <UsersList data={data} />
    </div>
  );
}
