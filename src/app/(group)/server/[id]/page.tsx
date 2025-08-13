import { UsersDetails } from "@/components/user/user-details";
import { simulateFetch } from "@/lib/fetch-sim";

export default async function ServerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data } = await simulateFetch("users", id, { simulateDelayMs: 200 });

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg border-2 dark:text-black">
      <h1 className="text-4xl font-bold mb-6">Server Page {id}</h1>
      <UsersDetails data={data} />
    </div>
  );
}
