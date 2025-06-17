import StudentTable from "@/components/StudentTable";
import dbConnect from "@/lib/db";
import Students from "@/lib/models/Students";

export default async function StudentsPage() {
  await dbConnect();
  const students = await Students.find();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <StudentTable students={JSON.parse(JSON.stringify(students))} />
    </div>
  );
}
