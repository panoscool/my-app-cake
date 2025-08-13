"use client";

import StateNav from "@/components/state/state-nav";
import MultiStepFormZustand from "@/components/state/zustand/multi-step-form";

const ZustandPage = () => {
  return (
    <div className="bg-neutral-100 min-h-screen relative">
      <StateNav />

      <main className="container mx-auto py-10">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="text-2xl font-semibold mb-2">Form with Zustand</h1>
          <MultiStepFormZustand />
        </div>
      </main>
    </div>
  );
};

export default ZustandPage;
