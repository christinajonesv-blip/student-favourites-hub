import students from "../data/students";
import StudentCard from "../components/StudentCard";

function StudentList() {
  return (
    <main className="page-container">
      <section className="hero">
        <span className="eyebrow">YOUR LITTLE CAMPUS CORNER</span>
        <h1>Meet your <span>people.</span></h1>
        <p>Discover your classmates and save your favourite students.</p>
      </section>

      <section className="section-heading">
        <div>
          <h2>All Students</h2>
          <p>Get to know everyone in your class.</p>
        </div>
        <span className="student-count">{students.length} Students</span>
      </section>

      <section className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </section>
    </main>
  );
}

export default StudentList;