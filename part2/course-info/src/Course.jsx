const Header = ({ course }) => <h2>{course.name}</h2>;

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <p>
      <span style={{ fontWeight: "bold" }}>
        Total of {totalExercises} exercises
      </span>
    </p>
  );
};

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>
);

export default Course;
