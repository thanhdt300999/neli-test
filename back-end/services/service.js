const getTodos = async () => {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM todo", (err, todos) => {
      if (err) {
        reject(err);
      } else {
        resolve(todos);
      }
    });
  });
};

const createTodo = async () => {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM todo", (err, todos) => {
      if (err) {
        reject(err);
      } else {
        resolve(todos);
      }
    });
  });
};

const editTodo = async () => {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM todo", (err, todos) => {
      if (err) {
        reject(err);
      } else {
        resolve(todos);
      }
    });
  });
};
const deleteTodo = async () => {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM todo", (err, todos) => {
      if (err) {
        reject(err);
      } else {
        resolve(todos);
      }
    });
  });
};

module.exports = { getTodos, createTodo, editTodo, deleteTodo };
