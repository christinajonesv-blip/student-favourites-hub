import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./slides/StudentList";
import FavouriteStudents from "./slides/FavouriteStudents";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/favourites" element={<FavouriteStudents />} />
      </Routes>

      <footer className="footer">
        Made with ♡ and a little bit of brown magic.
      </footer>
    </div>
  );
}

export default App;