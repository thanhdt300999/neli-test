import React, { useState } from "react";
import FormTodo from "../FormTodo/FormTodo";
import TodoItem from "../TodoItem/TodoItem";
// import gpl from 'graphql-tag';
// import { graphql } from 'react-apollo';
const fakeData = [
  { id: 1, description: "gfdgfgfdgdfgfdgr", isFinished: true },
  { id: 2, description: "Số 2", isFinished: false },
  { id: 3, description: "Số 3", isFinished: true },
  { id: 4, description: "Số 4", isFinished: true },
  { id: 5, description: "Số 5", isFinished: false },
  { id: 6, description: "Số 6", isFinished: false },
  { id: 7, description: "Số 7", isFinished: false },
  { id: 8, description: "Số 8", isFinished: false },
  { id: 9, description: "Số 9", isFinished: false },
];

// const Query = gpl`
//   query {
//     getTodos {
//       id
//       isFinished
//       description
//     }
//   }
// `;

const TodoList = (prop) => {
  const [listTodo, setListTodo] = useState(fakeData);
  const [innerText, setInnerText] = useState("");
  const [action, setAction] = useState("");
  const handleDelete = (id) => {
    setAction('delete')
  };
  const handleEdit = (description) => {
    setInnerText(description);
    setAction('edit')
  };
  const onChangeText = (e) => {
    console.log(e)
    setInnerText(e)
  }
  return (
    <>
      <div className="flex flex-col flex-1 gap-5 overflow-y-auto">
        {fakeData.map((todo) => (
          <TodoItem
            key={todo.id}
            description={todo.description}
            id={todo.id}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
           
          />
        ))}
      </div>
      <FormTodo 
        innerText={innerText}
        action={action}
        onChangeText={onChangeText}
      />
    </>
  );
};
// const TodoListComponent = graphql(Query)(TodoList);
export default TodoList;
