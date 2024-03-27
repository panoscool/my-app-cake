import { UsersDetails } from "@/app/_components/user-details";
import { TUser, getDataById } from "@/lib/fake-api";

// Opt out of caching for all data requests in the route segment
// export const dynamic = "force-dynamic";

export default async function ServerPage({ params }: { params: { id: string } }) {
  const data: TUser = await getDataById("users", params.id).then((json) => json);

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg border-2 border-green-600 dark:text-black">
      <h1 className="text-4xl font-bold mb-6">Server Page {params.id}</h1>
      <UsersDetails data={data} />
    </div>
  );
}
