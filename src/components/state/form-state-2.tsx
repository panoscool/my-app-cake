"use client";

import { useState } from "react";
import PersonalForm, { PersonalState } from "./form/form-1";
import { Button } from "../ui/button";

export function Form2() {
  const [formValues, setFormValues] = useState<PersonalState>({
    name: "",
    surname: "",
    age: "",
    gender: "female",
  });

  function handleChange(field: keyof PersonalState, value: string) {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg border p-6 shadow-sm bg-white"
    >
      <PersonalForm showHeading={false} values={formValues} onFieldChange={handleChange} />

      <div className="pt-2">
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form2;
