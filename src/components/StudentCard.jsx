import { useLocation } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function StudentCard({ student }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const location = useLocation();

  const favorite = isFavorite(student.id);
  const isFavoritesPage = location.pathname === "/favorites";

  function handleFavoriteClick() {
    if (isFavoritesPage) {
      toggleFavorite(student.id);
    } else if (!favorite) {
      toggleFavorite(student.id);
    }
  }

  return (
    <div className="w-full max-w-[260px] rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md relative">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={student.image}
          alt={student.name}
          className="h-16 w-16 rounded-full object-cover"
        />
      </div>

      {/* Student Details */}
      <div className="mt-3 space-y-1 text-center">
        <h2 className="text-base font-semibold text-gray-800">
          {student.name}
        </h2>

        <p className="text-xs text-gray-500">Roll No: {student.rollNo}</p>

        <p className="text-xs text-gray-500">Student ID: {student.studentId}</p>

        <p className="text-sm font-medium text-indigo-600">{student.course}</p>
      </div>

      {/* Favorite Heart */}
      <div className="mt-2 flex justify-center absolute top-0 right-8 ">
        <button
          onClick={handleFavoriteClick}
          disabled={!isFavoritesPage && favorite}
          aria-label={
            favorite ? "Student is a favorite" : "Add student to favorites"
          }
          className={`text-xl transition cursor-pointer hover:scale-[1.5] ${
            favorite
              ? "cursor-default text-red-500"
              : "text-gray-400 hover:scale-110 hover:text-red-500"
          }`}
        >
          {favorite ? "❤️" : "♡"}
        </button>
      </div>

      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        disabled={!isFavoritesPage && favorite}
        className={`mt-2 w-full rounded-lg px-2 py-2 cursor-pointer text-xs font-medium transition ${
          isFavoritesPage
            ? "bg-red-500 text-white hover:bg-red-600"
            : favorite
              ? "cursor-not-allowed bg-green-100 text-green-700"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
        }`}
      >
        {isFavoritesPage
          ? "Remove from Favorites"
          : favorite
            ? "✓ Added to Favorites"
            : "❤️ Add to Favorites"}
      </button>
    </div>
  );
}

export default StudentCard;
