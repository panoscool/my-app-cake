"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type TError = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: TError) {
  const router = useRouter();

  function refreshAndReset() {
    // The use of startTransition is to avoid race conditions between the two states updates
    startTransition(() => {
      router.refresh();
      reset();
    });
  }

  console.log("Error boundary", JSON.stringify(error, null, 2));

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6">
      <h2 className="text-xl">Something went wrong!</h2>
      <button
        onClick={refreshAndReset}
        className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md"
      >
        Try again
      </button>
    </div>
  );
}
