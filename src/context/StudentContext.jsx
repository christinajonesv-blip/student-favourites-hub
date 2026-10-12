import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (student) => {
    setFavourites((previous) => {
      const exists = previous.some(
        (item) => item.id === student.id
      );

      if (exists) return previous;

      return [...previous, student];
    });
  };

  const removeFavourite = (studentId) => {
    setFavourites((previous) =>
      previous.filter((student) => student.id !== studentId)
    );
  };

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}