import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import './App.css'

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false
    },

    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false
    },

    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false
    }
  ])

  const toggleCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed
        }

        return todo
      })
    )
  }

  const removeTodo = (todoId) => {
    setTodos(
      todos.filter((todo) => todo.id !== todoId)
    )
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    setTodos(
      todos.concat({
        id: todos.length + 1,
        title: todoTitle,
        completed: false,
      })
    )
  }

  console.log(todos)

  return (
    <TodoContext.Provider value={{ toggleCompleted, removeTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
    color: '#333',
    textShadow: '1px 1px 2px #ccc',
  },
}

export default App
