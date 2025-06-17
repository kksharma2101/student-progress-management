import dbConnect from '@/lib/db';
import Students from '@/lib/models/Students';
// import Student from '@/models/Student';

await dbConnect();
export async function GET(_: Request, { params }: any) {
    const student = await Students.findById(params.id);
    return Response.json(student);
}

export async function PUT(req: Request, { params }: any) {
    // await dbConnect();
    const data = await req.json();
    const updated = await Students.findByIdAndUpdate(params.id, data, { new: true });
    return Response.json(updated);
}

export async function DELETE(_: Request, { params }: any) {
    // await dbConnect();
    await Students.findByIdAndDelete(params.id);
    return Response.json({ success: true });
}
