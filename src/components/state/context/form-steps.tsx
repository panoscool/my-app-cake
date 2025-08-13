import { useMultiStepForm } from "./form-context";
import PersonalSection from "../form/form-1";
import WorkSection from "../form/form-2";
import AddressSection from "../form/form-3";

export function StepPersonal() {
  const { state, update } = useMultiStepForm();
  return (
    <PersonalSection values={state.personal} onFieldChange={(f, v) => update("personal", f, v)} />
  );
}

export function StepWork() {
  const { state, update } = useMultiStepForm();
  return <WorkSection values={state.work} onFieldChange={(f, v) => update("work", f, v)} />;
}

export function StepAddress() {
  const { state, update } = useMultiStepForm();
  return (
    <AddressSection values={state.address} onFieldChange={(f, v) => update("address", f, v)} />
  );
}
