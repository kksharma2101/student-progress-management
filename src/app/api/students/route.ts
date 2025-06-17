import dbConnect from '@/lib/db';
import Students from '@/lib/models/Students';
// import Student from '@/models/Student';

await dbConnect();
export async function GET() {
    const students = await Students.find();
    return Response.json(students);
}

export async function POST(req: Request) {
    const data = await req.json();
    const student = await Students.create(data);
    return Response.json(student);
}
