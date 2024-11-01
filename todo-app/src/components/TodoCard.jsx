import React from 'react'

export default function TodoCard(props) {
  const { todo, todoIndex, handleCompleteTodo, handleDeleteTodo } = props

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button onClick={() => {
          handleCompleteTodo(todoIndex)
        }} disabled={todo.isComplete}>
          <h6>Complete This</h6>
        </button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }}>
          <h6>Delete This</h6>
        </button>
      </div>
    </div>
  )
}
