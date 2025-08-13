import { create } from "zustand";
import { PersonalState } from "../form-1";
import { WorkState } from "../form-2";
import { AddressState } from "../form-3";

export interface MultiStepFormSlice {
  step: number;
  personal: PersonalState;
  work: WorkState;
  address: AddressState;
  update: (section: "personal" | "work" | "address", field: string, value: string) => void;
  next: () => void;
  prev: () => void;
  goTo: (step: number) => void;
  reset: () => void;
}

const initial = {
  personal: { name: "", surname: "", age: "", gender: "male" },
  work: { company: "", position: "", yearsExperience: "", employmentType: "full-time" },
  address: { street: "", city: "", state: "", postalCode: "", country: "US" },
};

export const useMultiStepZustand = create<MultiStepFormSlice>((set) => ({
  step: 1,
  ...initial,
  update: (section, field, value) => set((s) => ({ [section]: { ...s[section], [field]: value } })),
  next: () => set((s) => ({ step: Math.min(3, s.step + 1) })),
  prev: () => set((s) => ({ step: Math.max(1, s.step - 1) })),
  goTo: (step) => set({ step: Math.min(3, Math.max(1, step)) }),
  reset: () => set({ step: 1, ...initial }),
}));
