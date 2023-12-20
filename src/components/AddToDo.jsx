import React, { useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const AddToDo = ({ handleAddToDo }) => {
  const taskName = useRef();
  const taskDate = useRef();

  const handleTaskAdded = () => {
    const name = taskName.current.value;
    const date = taskDate.current.value;
    handleAddToDo(name, date);
    taskName.current.value = "";
    taskDate.current.value = "";
  };

  return (
    <div className="row p-2">
      <div className="col-6">
        <input type="text" ref={taskName} placeholder="Enter ToDo here" />
      </div>
      <div className="col-4">
        <input type="date" ref={taskDate} />
      </div>
      <div className="col-2">
        <IoAddCircleOutline size={30} onClick={handleTaskAdded} />
      </div>
    </div>
  );
};

export default AddToDo;
