"use client";

import Form1 from "@/components/state/form-state-1";
import Form2 from "@/components/state/form-state-2";
import StateNav from "@/components/state/state-nav";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight } from "lucide-react";
import { useState } from "react";

const StatePage = () => {
  const [form, setForm] = useState(1);

  return (
    <div className="bg-neutral-100 min-h-screen relative">
      <StateNav />

      <main className="container mx-auto py-10">
        <div className="flex gap-4 justify-center">
          <h1 className="text-2xl font-semibold mb-6">Use State Form {form}</h1>
          <Button
            variant="outline"
            aria-label="Switch form"
            onClick={() => setForm(form === 1 ? 2 : 1)}
          >
            <ArrowLeftRight />
          </Button>
        </div>
        {form === 1 ? <Form1 /> : <Form2 />}
      </main>
    </div>
  );
};

export default StatePage;
