"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type WorkState = {
  company: string;
  position: string;
  yearsExperience: string;
  employmentType: string;
};

type FormProps = {
  values: WorkState;
  showHeading?: boolean;
  onFieldChange: (field: keyof WorkState, value: string) => void;
};

function WorkSection({ values, onFieldChange, showHeading = true }: FormProps) {
  const { company, position, yearsExperience, employmentType } = values;

  return (
    <div className="space-y-6">
      {showHeading && <h2 className="text-xl font-semibold">Work Information</h2>}

      <div className="space-y-2">
        <Label htmlFor="ms-company">Company</Label>
        <Input
          id="ms-company"
          value={company}
          onChange={(e) => onFieldChange("company", e.target.value)}
          placeholder="Acme Inc."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ms-position">Position / Title</Label>
        <Input
          id="ms-position"
          value={position}
          onChange={(e) => onFieldChange("position", e.target.value)}
          placeholder="Software Engineer"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="ms-yearsExperience">Years of Experience</Label>
        <Input
          id="ms-yearsExperience"
          type="number"
          min={0}
          value={yearsExperience}
          onChange={(e) => onFieldChange("yearsExperience", e.target.value)}
          placeholder="5"
        />
      </div>
      <div className="space-y-2">
        <Label>Employment Type</Label>
        <Select
          value={employmentType}
          onValueChange={(val) => onFieldChange("employmentType", val)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            {["full-time", "part-time", "contract", "freelance", "internship"].map((v) => (
              <SelectItem key={v} value={v}>
                {v.replace(/-/g, " ")}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default WorkSection;
