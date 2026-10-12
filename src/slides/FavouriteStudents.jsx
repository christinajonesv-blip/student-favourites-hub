import { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

function FavouriteStudents() {
  const { favourites } = useContext(StudentContext);

  return (
    <main className="page-container">
      <section className="hero favourites-hero">
        <span className="eyebrow">A LITTLE COLLECTION OF YOURS</span>
        <h1>Your <span>favourites.</span></h1>
        <p>Your favourite classmates, all together in one place.</p>
      </section>

      <section className="section-heading">
        <div>
          <h2>Saved Students</h2>
          <p>The people you've added to your list.</p>
        </div>
        <span className="student-count">
          {favourites.length} Saved
        </span>
      </section>

      {favourites.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♡</div>
          <h2>No favourite students added yet</h2>
          <p>Your list is waiting for its first favourite!</p>
          <Link to="/" className="explore-btn">
            Explore Students →
          </Link>
        </div>
      ) : (
        <section className="student-grid">
          {favourites.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              isFavouritePage={true}
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default FavouriteStudents;