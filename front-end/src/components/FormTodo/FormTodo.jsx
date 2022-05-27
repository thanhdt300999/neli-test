import React, { useState } from "react";
import Select from "react-select";

const FormTodo = ({ innerText, action, onChangeText }) => {
  const [prioritySelected, setPrioritySelected] = useState("HIGH");
  return (
    <>
      <form className="flex items-stretch">
        <input
          type="text"
          name=""
          id=""
          value={innerText}
          className="flex-1 border px-3 py-1"
          onChange={(e) => onChangeText(e.target.value)}
        />
        <Select
          defaultValue={{ value: "2", label: "Unfinished" }}
          menuPlacement="top"
          menuPosition="absolute"
          className="w-[120px] text-[12px]"
          placeholder="Select status"
          onChange={(priority) => setPrioritySelected(priority)}
          //   styles={colourStyles}
          options={[
            { value: "1", label: "Finished" },
            { value: "2", label: "Unfinished" },
          ]}
        />
        <button
          type="submit"
          className="text-center text-white bg-blue-500 px-4"
        >
          {action ? "Save" : "Add"}
        </button>
      </form>
    </>
  );
};

export default FormTodo;
