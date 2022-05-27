const { getDB, pool } = require("../mysql");
const db = pool;
const resolvers = {
  Query: {
    getTodos: async () => {
      return new Promise((resolve, reject) => {
        db.query("SELECT * FROM todo", (err, todos) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            console.log(todos);
            resolve(todos);
          }
        });
      });
    },
    // createTodo: async () => {
    //   const db = await getDB();
    //   return new Promise((resolve, reject) => {
    //     db.query("SELECT * FROM todo", (err, todos) => {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(todos);
    //       }
    //     });
    //   });
    // },
    // editTodo: async () => {
    //   const db = await getDB();
    //   return new Promise((resolve, reject) => {
    //     db.query("SELECT * FROM todo", (err, todos) => {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(todos);
    //       }
    //     });
    //   });
    // },
    // deleteTodo: async () => {
    //   const db = await getDB();
    //   return new Promise((resolve, reject) => {
    //     db.query("SELECT * FROM todo", (err, todos) => {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(todos);
    //       }
    //     });
    //   });
    // },
  },
  Mutation: {
    createTodo: async (parent, args) => {
      const { id, description } = args;
      return new Promise((resolve, reject) => {
        db.query(
          `INSERT INTO todo (id,description) 
           VALUES ("${id}","${description}");
          
          `,
          (err, todos) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              console.log("ok", todos);
              resolve(todos.affectedRows);
            }
          }
        );
      });
    },
  },
};

module.exports = resolvers;
