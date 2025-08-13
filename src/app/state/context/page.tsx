"use client";

import { MultiStepForm } from "@/components/state/context/multi-step-form";
import { MultiStepFormProvider } from "@/components/state/example-context";
import StateNav from "@/components/state/state-nav";

const ContextPage = () => {
  return (
    <div className="bg-neutral-100 min-h-screen relative">
      <StateNav />

      <main className="container mx-auto py-10">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 className="text-2xl font-semibold mb-2">Form with Context & Reducer</h1>
          <MultiStepFormProvider>
            <MultiStepForm />
          </MultiStepFormProvider>
        </div>
      </main>
    </div>
  );
};

export default ContextPage;
