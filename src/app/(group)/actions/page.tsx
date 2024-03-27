"use client";

import { serverAction } from "@/actions/some-action";
import { Button } from "@/components/button";

export default function ActionsPage() {
  const clientAction = () => {
    console.log("Client Action");
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <h1 className="text-4xl font-bold mb-8">Actions Page</h1>
      <div className="flex justify-between">
        <Button onClick={clientAction}>Client</Button>

        <form action={serverAction}>
          <Button type="submit">Server</Button>
        </form>
      </div>
    </div>
  );
}
