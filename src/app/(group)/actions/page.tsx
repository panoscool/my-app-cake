"use client";

import { serverAction } from "@/actions/some-action";
import { Button } from "@/components/ui/button";

export default function ActionsPage() {
  const clientAction = () => {
    console.log("Client Action");
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-sm max-w-screen-lg dark:text-black">
      <h1 className="text-4xl font-bold mb-8">Actions Page</h1>
      <p>This page demonstrates client and server actions.</p>
      <p className="mb-9">Click the buttons below and check the console (browser and vscode).</p>

      <div className="flex justify-between">
        <Button onClick={clientAction}>Client</Button>

        <Button onClick={() => serverAction()}>Server Action 1</Button>

        <form action={serverAction}>
          <Button type="submit">Server Action 2</Button>
        </form>
      </div>
    </div>
  );
}
