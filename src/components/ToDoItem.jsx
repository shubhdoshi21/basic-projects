import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
const ToDoItem = ({ task, date, handleDeleteToDo }) => {
  return (
    <div className="row p-1">
      <div className="col-6">{task}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <IoCheckmarkDoneSharp
          size={30}
          onClick={() => handleDeleteToDo(task)}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
