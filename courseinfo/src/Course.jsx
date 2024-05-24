const Header = ({ course }) => <h2>{course.name}</h2>

const Content = ({ course }) => <div>{course.parts.map((part, id) => <Part key={id} part={part} />)}</div>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ course }) => <p>Number of exercises {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</p>

const Course = ({ course }) => {
return (
  <div>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </div>
)
}

export default Course