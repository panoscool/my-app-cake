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

export type AddressState = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

const COUNTRIES = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
];

type FormProps = {
  values: AddressState;
  showHeading?: boolean;
  onFieldChange: (field: keyof AddressState, value: string) => void;
};

function AddressSection({ values, onFieldChange, showHeading = true }: FormProps) {
  const { street, city, state, postalCode, country } = values;

  return (
    <div className="space-y-6">
      {showHeading && <h2 className="text-xl font-semibold">Address</h2>}

      <div className="space-y-2">
        <Label htmlFor="ms-street">Street</Label>
        <Input
          id="ms-street"
          value={street}
          onChange={(e) => onFieldChange("street", e.target.value)}
          placeholder="123 Main St"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ms-city">City</Label>
          <Input
            id="ms-city"
            value={city}
            onChange={(e) => onFieldChange("city", e.target.value)}
            placeholder="New York"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ms-state">State / Province</Label>
          <Input
            id="ms-state"
            value={state}
            onChange={(e) => onFieldChange("state", e.target.value)}
            placeholder="NY"
          />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="ms-postalCode">Postal Code</Label>
          <Input
            id="ms-postalCode"
            value={postalCode}
            onChange={(e) => onFieldChange("postalCode", e.target.value)}
            placeholder="10001"
          />
        </div>
        <div className="space-y-2">
          <Label>Country</Label>
          <Select value={country} onValueChange={(val) => onFieldChange("country", val)}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default AddressSection;
