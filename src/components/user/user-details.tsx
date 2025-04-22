import { TUser } from "@/types/common";

export const UsersDetails = ({ data, isLoading }: { data: TUser | null; isLoading?: boolean }) => {
  console.log("UsersDetails", data);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2">
        <p>Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col gap-2">
        <p>No data found</p>
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
