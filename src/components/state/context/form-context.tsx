"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";
import { PersonalState } from "../form/form-1";
import { WorkState } from "../form/form-2";
import { AddressState } from "../form/form-3";

type FormState = {
  step: number;
  personal: PersonalState;
  work: WorkState;
  address: AddressState;
};

type Action =
  | { type: "UPDATE_FIELD"; section: keyof Omit<FormState, "step">; field: string; value: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "GO_TO_STEP"; step: number }
  | { type: "RESET" };

const initialState: FormState = {
  step: 1,
  personal: { name: "", surname: "", age: "", gender: "male" },
  work: { company: "", position: "", yearsExperience: "", employmentType: "full-time" },
  address: { street: "", city: "", state: "", postalCode: "", country: "US" },
};

function reducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const sectionState = state[action.section];
      if (typeof sectionState !== "object" || sectionState === null) return state; // safeguard
      return {
        ...state,
        [action.section]: { ...sectionState, [action.field]: action.value },
      };
    }
    case "NEXT_STEP":
      return { ...state, step: Math.min(3, state.step + 1) };
    case "PREV_STEP":
      return { ...state, step: Math.max(1, state.step - 1) };
    case "GO_TO_STEP":
      return { ...state, step: Math.min(3, Math.max(1, action.step)) };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

interface MultiStepContextValue {
  state: FormState;
  update: (section: keyof Omit<FormState, "step">, field: string, value: string) => void;
  next: () => void;
  prev: () => void;
  goTo: (step: number) => void;
  reset: () => void;
}

const MultiStepFormContext = createContext<MultiStepContextValue | null>(null);

export function useMultiStepForm() {
  const ctx = useContext(MultiStepFormContext);
  if (!ctx) throw new Error("useMultiStepForm must be used within MultiStepFormProvider");
  return ctx;
}

export function MultiStepFormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: MultiStepContextValue = {
    state,
    update: (section, field, value) => dispatch({ type: "UPDATE_FIELD", section, field, value }),
    next: () => dispatch({ type: "NEXT_STEP" }),
    prev: () => dispatch({ type: "PREV_STEP" }),
    goTo: (step) => dispatch({ type: "GO_TO_STEP", step }),
    reset: () => dispatch({ type: "RESET" }),
  };

  return <MultiStepFormContext.Provider value={value}>{children}</MultiStepFormContext.Provider>;
}
