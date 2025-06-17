import { Student } from "@/types/student";
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

interface StudentFormProps {
  student: Student;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting?: boolean;
  title?: string;
  errors?: Record<string, string>;
}

const inputValue = [
  { name: "name", label: "Name", type: "text", maxLength: 50 },
  { name: "email", label: "Email", type: "email", maxLength: 100 },
  { name: "phone", label: "Phone Number", type: "tel", maxLength: 10 },
  {
    name: "codeforcesHandle",
    label: "Codeforces Handle",
    type: "text",
    maxLength: 20,
  },
  { name: "currentRating", label: "Current Rating", type: "number", max: 10 },
  { name: "maxRating", label: "Max Rating", type: "number" },
];

const StudentForm: React.FC<StudentFormProps> = ({
  student,
  onSubmit,
  onCancel,
  onChange,
  isSubmitting = false,
  title,
  errors = {},
}) => {
  function formatInputValue(value: unknown): string | number {
    if (value instanceof Date) {
      return value.toISOString().split("T")[0]; // or .toLocaleDateString() if needed
    }
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
    return "";
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {inputValue.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          type={field.type}
          id={field.name}
          name={field.name}
          value={formatInputValue(student[field.name as keyof typeof student])}
          onChange={onChange}
          max={field.max}
          maxLength={field.maxLength}
          error={errors[field.name]}
          required
          disabled={field.name === "maxRating"}
        />
      ))}

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" isLoading={isSubmitting}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
