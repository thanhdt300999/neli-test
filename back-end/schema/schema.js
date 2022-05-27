const { gql } = require("apollo-server");

const typeDefs = gql`
    type Todo {
        id: ID!,
        description: String,
        isFinished: Boolean
    }

    #Root type 
    type Query {
        getTodos: [Todo],
        createTodo: [Todo],
        editTodo: [Todo],
        deleteTodo: String
    }
`

module.exports = typeDefs