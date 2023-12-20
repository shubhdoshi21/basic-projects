import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const AddToDo = ({ handleAddToDo }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };
  const handleTaskDate = (e) => {
    setTaskDate(e.target.value);
  };
  const handleTaskAdded = () => {
    if (taskName && taskDate) {
      handleAddToDo(taskName, taskDate);
      setTaskName("");
      setTaskDate("");
    }
  };

  return (
    <div className="row p-2">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter ToDo here"
          value={taskName}
          onChange={handleTaskName}
        />
      </div>
      <div className="col-4">
        <input type="date" value={taskDate} onChange={handleTaskDate} />
      </div>
      <div className="col-2">
        <IoAddCircleOutline size={30} onClick={handleTaskAdded} />
      </div>
    </div>
  );
};

export default AddToDo;
