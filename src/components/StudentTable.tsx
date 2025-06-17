"use client";

import { Student } from "@/types/student";
import Link from "next/link";

export default function StudentTable({ students }: { students: Student[] }) {
  return (
    <div className="grid grid-cols-1 overflow-x-auto rounded-lg bg-white shadow">
      <table className="divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Name
            </th>
            <th
              scope="col"
              className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Email
            </th>
            <th
              scope="col"
              className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Phone
            </th>
            <th
              scope="col"
              className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Handle
            </th>
            <th
              scope="col"
              className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Current
            </th>
            <th
              scope="col"
              className="cursor-pointer px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Max
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {students?.map((stu) => (
            <tr key={stu._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                {stu.name}
              </td>
              <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                {stu?.email}
              </td>
              <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                {stu?.phone}
              </td>
              <td className="px-6 py-4 text-[10px] whitespace-nowrap">
                {stu?.codeforcesHandle}
              </td>
              <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                {stu?.currentRating}
              </td>
              <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                {stu?.maxRating}
              </td>
              <td className="px-6 py-4 text-right text-sm font-medium whitespace-nowrap">
                <Link
                  href={`/students/${stu?._id}`}
                  className="text-blue-600 hover:text-blue-900"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    // <table className="table-auto w-full border">
    //   <thead>
    //     <tr className="bg-gray-200">
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Phone</th>
    //       <th>Handle</th>
    //       <th>Current</th>
    //       <th>Max</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {students.map((s) => (
    //       <tr key={s._id}>
    //         <td>{s.name}</td>
    //         <td>{s.email}</td>
    //         <td>{s.phone}</td>
    //         <td>{s.handle}</td>
    //         <td>{s.currentRating}</td>
    //         <td>{s.maxRating}</td>
    //         <td>
    //           <Link href={`/students/${s._id}`} className="text-blue-500">
    //             View
    //           </Link>{" "}
    //           |
    //           <Link
    //             href={`/students/new?id=${s._id}`}
    //             className="text-green-500"
    //           >
    //             Edit
    //           </Link>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}
