import { Button } from "@/components/ui/button";
import { useMultiStepForm } from "../example-context";
import { ProgressIndicator } from "../progress-indicator";
import { StepAddress, StepPersonal, StepWork } from "./form-steps";

export function MultiStepForm() {
  const { state, next, prev, reset } = useMultiStepForm();
  const isLast = state.step === 3;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLast) {
      console.log("state: ", state);
    } else {
      next();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg border p-6 shadow-sm bg-white"
    >
      <ProgressIndicator current={state.step} />
      {state.step === 1 && <StepPersonal />}
      {state.step === 2 && <StepWork />}
      {state.step === 3 && <StepAddress />}
      <div className="flex items-center justify-between pt-4">
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={reset} disabled={state.step === 1}>
            Reset
          </Button>
          <Button type="button" variant="outline" onClick={prev} disabled={state.step === 1}>
            Previous
          </Button>
        </div>
        <Button type="submit">{isLast ? "Submit" : "Next"}</Button>
      </div>
    </form>
  );
}
