"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type PersonalState = {
  name: string;
  surname: string;
  age: string;
  gender: string;
};

type FormProps = {
  values: PersonalState;
  showHeading?: boolean;
  onFieldChange: (field: keyof PersonalState, value: string) => void;
};

function PersonalSection({ values, onFieldChange, showHeading = true }: FormProps) {
  const { name, surname, age, gender } = values;
  const fullName = `${name} ${surname}`.trim();

  return (
    <div className="space-y-6">
      {showHeading && <h2 className="text-xl font-semibold">Personal Information</h2>}

      <div className="text-sm text-muted-foreground">
        Full Name: <strong>{fullName}</strong>
      </div>

      <div className="space-y-2">
        <Label htmlFor="ms-name">Name</Label>
        <Input
          id="ms-name"
          value={name}
          onChange={(e) => onFieldChange("name", e.target.value)}
          placeholder="John"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ms-surname">Surname</Label>
        <Input
          id="ms-surname"
          value={surname}
          onChange={(e) => onFieldChange("surname", e.target.value)}
          placeholder="Doe"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ms-age">Age</Label>
        <Input
          id="ms-age"
          type="number"
          min={0}
          value={age}
          onChange={(e) => onFieldChange("age", e.target.value)}
          placeholder="30"
        />
      </div>
      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup
          value={gender}
          onValueChange={(val) => onFieldChange("gender", val)}
          className="flex flex-wrap gap-4"
          aria-label="Gender"
        >
          {[
            ["male", "Male"],
            ["female", "Female"],
            ["other", "Other"],
          ].map(([val, label]) => (
            <div key={val} className="flex items-center gap-2">
              <RadioGroupItem id={`ms-gender-${val}`} value={val} />
              <Label htmlFor={`ms-gender-${val}`} className="cursor-pointer">
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export default PersonalSection;
