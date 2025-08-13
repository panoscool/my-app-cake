"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

export function Form1() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${name} ${surname}`);
  }, [name, surname]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, surname, age, gender });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg border p-6 shadow-sm"
    >
      <div>
        Full Name: <strong>{fullName}</strong>
      </div>
      <div className="space-y-2">
        <Label htmlFor="firstName">Name</Label>
        <Input
          id="firstName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="surname">Surname</Label>
        <Input
          id="surname"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="Doe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          min={0}
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="30"
        />
      </div>

      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup
          value={gender}
          onValueChange={(val) => setGender(val)}
          className="flex flex-wrap gap-4"
          aria-label="Gender"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem id="gender-male" value="male" />
            <Label htmlFor="gender-male" className="cursor-pointer">
              Male
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="gender-female" value="female" />
            <Label htmlFor="gender-female" className="cursor-pointer">
              Female
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="gender-other" value="other" />
            <Label htmlFor="gender-other" className="cursor-pointer">
              Other
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}

export default Form1;
