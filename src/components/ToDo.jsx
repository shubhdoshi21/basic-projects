import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddToDo from "./AddToDo";

const ToDo = () => {
  const [toDo, setToDo] = useState([]);
  const handleAddToDo = (taskName, taskDate) => {
    const newToDo = [...toDo, { task: taskName, date: taskDate }];
    setToDo(newToDo);
  };
  const handleDeleteToDo = (task) => {
    const updatedToDo = toDo.filter((t) => t.task !== task);
    setToDo(updatedToDo);
  };
  return (
    <center>
      <h1 className="p-2 fw-semibold">ToDo List</h1>
      <div className="container">
        <AddToDo handleAddToDo={handleAddToDo} />
        {toDo.length === 0 && (
          <div className="alert alert-info p-2" style={{ width: "400px" }}>
            Enjoy your day !!
          </div>
        )}
        {toDo.map((data, index) => (
          <ToDoItem
            key={index}
            task={data.task}
            date={data.date}
            handleDeleteToDo={handleDeleteToDo}
          />
        ))}
      </div>
    </center>
  );
};

export default ToDo;
