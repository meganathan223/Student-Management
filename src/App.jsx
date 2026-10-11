import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { FavoritesProvider } from "./context/FavoritesContext";

import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <div className="min-h-screen bg-slate-50">
          <Navbar />

          <Routes>
            <Route path="/" element={<StudentList />} />

            <Route path="/favorites" element={<Favorites />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}

export default App;
