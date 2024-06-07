import React, { useContext } from 'react'
import { TodoContext } from '../App'

const TodoItem = ({ todo }) => {
    const { toggleCompleted, removeTodo } = useContext(TodoContext)

    const getTodoTitleStyle = () => ({
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.completed ? '#888' : '#000',
    });

    return (
        <div style={styles.todoItem}>
            <input
                type='checkbox'
                style={styles.checkbox}
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
            />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button
                style={styles.button}
                onClick={() => removeTodo(todo.id)}
            > x </button>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        marginBottom: '8px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    checkbox: {
        height: '18px',
        width: '18px',
    },
    button: {
        backgroundColor: '#BB0000',
        color: '#fff',
        height: '30px',
        width: '30px',
        borderRadius: '100%',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#FF0000',
    },
}

export default TodoItem