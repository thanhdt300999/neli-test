import React from "react";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
const TodoItem = ({
  id,
  description,
  status,
  handleEdit,
  handleDelete,
  priority,
  numOrder,
  onChange,
  onDelete,
}) => {
  return (
    <div className="flex gap-2">
      <div
        className={`flex flex-1 items-center gap-2 h-[20px] ${
          status === "completed" ? "opacity-40 line-through" : ""
        }`}
      >
        <input
          type="checkbox"
          name=""
          id={id}
          checked={status === "completed"}
          // onChange={() => onChange()}
          className="w-4 h-4 rounded-md"
        />
        <label htmlFor={id} className="inline-block flex-1 text-[18px]">
          <span className="text-blue-400 pr-1">#{id} </span>
          <span className="capitalize">{description}</span>
        </label>
      </div>
      <div
        className="cursor-pointer"
        onClick={(e) => handleEdit(description)}
      >
        <BsPencilFill color="orange" />
      </div>
      <div
        className="cursor-pointer"
        onClick={(e) => handleDelete(description)}
      >
        <BsTrashFill color="red"/>
      </div>
    </div>
  );
};

export default TodoItem;
