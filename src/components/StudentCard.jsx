import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentCard({ student, isFavouritePage = false }) {
  const { favourites, addFavourite, removeFavourite } =
    useContext(StudentContext);

  const isFavourite = favourites.some(
    (item) => item.id === student.id
  );

  return (
    <article className="student-card">
      <div className="student-avatar">
        {student.name.charAt(0)}
      </div>

      <div className="student-info">
        <h3>{student.name}</h3>
        <p>Roll No: {student.rollNumber}</p>
        <span className="department">{student.department}</span>
      </div>

      {isFavouritePage ? (
        <button
          className="remove-btn"
          onClick={() => removeFavourite(student.id)}
        >
          Remove
        </button>
      ) : (
        <button
          className={isFavourite ? "favourite-btn added" : "favourite-btn"}
          onClick={() => addFavourite(student)}
          disabled={isFavourite}
        >
          {isFavourite ? "♥ Added" : "♡ Add to Favourite"}
        </button>
      )}
    </article>
  );
}

export default StudentCard;