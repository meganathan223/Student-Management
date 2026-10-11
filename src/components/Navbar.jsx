import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "font-semibold text-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Student Management
        </Link>

        <div className="flex gap-6">
          <NavLink to="/" end className={linkClass}>
            Students
          </NavLink>

          <NavLink to="/favorites" className={linkClass}>
            Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
