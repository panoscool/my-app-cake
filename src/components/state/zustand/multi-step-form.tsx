"use client";

import { Button } from "@/components/ui/button";
import PersonalSection from "../form-1";
import WorkSection from "../form-2";
import AddressSection from "../form-3";
import { useMultiStepZustand } from "./store";
import { ProgressIndicator } from "../progress-indicator";

export function MultiStepFormZustand() {
  const { step, personal, work, address, update, next, prev, reset } = useMultiStepZustand();
  const isLast = step === 3;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLast) {
      console.log("state: ", { personal, work, address });
    } else {
      next();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg border p-6 shadow-sm bg-white"
    >
      <ProgressIndicator current={step} />

      {step === 1 && (
        <PersonalSection
          values={personal}
          onFieldChange={(f: keyof typeof personal, v: string) => update("personal", f, v)}
        />
      )}
      {step === 2 && (
        <WorkSection
          values={work}
          onFieldChange={(f: keyof typeof work, v: string) => update("work", f, v)}
        />
      )}
      {step === 3 && (
        <AddressSection
          values={address}
          onFieldChange={(f: keyof typeof address, v: string) => update("address", f, v)}
        />
      )}
      <div className="flex items-center justify-between pt-4">
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={reset} disabled={step === 1}>
            Reset
          </Button>
          <Button type="button" variant="outline" onClick={prev} disabled={step === 1}>
            Previous
          </Button>
        </div>
        <Button type="submit">{isLast ? "Submit" : "Next"}</Button>
      </div>
    </form>
  );
}

export default MultiStepFormZustand;
