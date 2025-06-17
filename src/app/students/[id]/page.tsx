import dbConnect from "@/lib/db";
// import Student from '@/models/Student';
import { fetchCodeforcesStats } from "@/lib/codeforces";
import Students from "@/lib/models/Students";

export default async function StudentDetail({
  params,
}: {
  params: { id: string };
}) {
  await dbConnect();
  const student = await Students.findById(params.id);
  const rating = await fetchCodeforcesStats(student.handle);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">{student.name} Details</h2>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
      <p>Codeforces: {student.handle}</p>
      <p>Current Rating: {rating.currentRating}</p>
      <p>Max Rating: {rating.maxRating}</p>
    </div>
  );
}
