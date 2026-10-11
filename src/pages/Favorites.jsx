import students from "../data/students";
import StudentCard from "../components/StudentCard";
import { useFavorites } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useFavorites();

  const favoriteStudents = students.filter((student) =>
    favorites.includes(student.id),
  );

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-slate-900">Favorite Students</h2>

        <p className="mt-2 mb-8 text-slate-500">
          Your selected students appear here.
        </p>

        {favoriteStudents.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-lg font-semibold text-slate-700">
              No favorite students yet
            </p>

            <p className="mt-2 text-slate-500">
              Visit the Student List page and add some favorites.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {favoriteStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Favorites;
