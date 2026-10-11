import StudentCard from "../components/StudentCard";
import students from "../data/students";

export default function StudentList() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-indigo-600">Student List</h2>

          <p className="mt-2 text-slate-500">
            View and manage all registered students.
          </p>
        </div>

        {/* Student Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </main>
  );
}
