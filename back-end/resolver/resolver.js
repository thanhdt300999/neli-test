
const resolvers = {
  Query: {
    // getTodos: () => [{ id: "1", description: "abc", isFinished: false }],
    getTodos: async () => {
      const db = await getDB();
      return new Promise((resolve, reject) => {
        db.query("SELECT * FROM todo", (err, todos) => {
            console.log(err)
            console.log(todos)
          if (err) {
            reject(err);
            console.log(err)
          } else {
            resolve(todos);
            console.log(err)
          }
        });
      });
    },
    createTodo: async () => {
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
    },
    editTodo: async () => {
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
    },
    deleteTodo: async () => {
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
    },
  },
};

module.exports = resolvers;
