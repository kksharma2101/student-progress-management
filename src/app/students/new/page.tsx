"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Student } from "@/types/student";
import StudentForm from "@/components/StudentForm";
// import { toast } from 'react-toastify';

const CreateStudentPage: React.FC = () => {
  const navigate = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [student, setStudent] = useState<Omit<Student, "_id">>({
    name: "",
    email: "",
    phone: "",
    codeforcesHandle: "",
    currentRating: 0,
    maxRating: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!student.name.trim()) newErrors.name = "Name is required";
    if (!student.email.trim()) newErrors.email = "Email is required";
    if (!student.codeforcesHandle.trim())
      newErrors.codeforcesHandle = "Codeforces handle is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/students", student);

      // if (student.codeforcesHandle) {
      //   await axios.put(`/api/students/${response.data}/update-ratings`);
      // }

      // toast.success('Student created successfully!');
      navigate.push("/students");
    } catch (error) {
      console.error("Error creating student:", error);
      // toast.error(error.response?.data?.message || 'Failed to create student');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Register Student
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <StudentForm
            student={student}
            onSubmit={handleSubmit}
            onCancel={() => navigate.push("/students")}
            onChange={handleChange}
            isSubmitting={isSubmitting}
            title="Student Information"
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateStudentPage;
