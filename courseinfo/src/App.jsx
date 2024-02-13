import { useState } from "react";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = (props) => {
    console.log(props.course.name);
    return <h1>{props.course.name}</h1>;
  };

  const Part = (props) => {
    console.log(props.course.parts[0].name);

    return (
      <div>
        <p>
          {props.course.parts[0].name} {props.course.parts[0].exercises}
        </p>
        <p>
          {props.course.parts[1].name} {props.course.parts[1].exercises}
        </p>
        <p>
          {props.course.parts[2].name} {props.course.parts[2].exercises}
        </p>
      </div>
    );
  };

  const Content = () => {
    return <div>{<Part course={course} />}</div>;
  };

  const Total = (props) => {
    const num1 = props.course.parts[0].exercises;
    const num2 = props.course.parts[1].exercises;
    const num3 = props.course.parts[2].exercises;
    const total = num1 + num2 + num3;
    console.log(`Number of exercises ${total}`);
    return (
      <div>
        <p>Number of exercises {total}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total course={course} />
      <Test />
    </div>
  );
};

export default App;
