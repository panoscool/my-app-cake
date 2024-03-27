import { TUser } from "@/lib/fake-api";

export const UsersDetails = ({ data }: { data: TUser | null }) => {
  console.log("UsersDetails", data);

  if (!data) {
    return (
      <div className="flex flex-col gap-2">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website: {data.website}</p>
    </div>
  );
};
