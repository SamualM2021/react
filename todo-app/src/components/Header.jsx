import React from 'react'

export default function Header(props) {
  const { todos } = props
  const todosLength = todos.filter(val => !val.isComplete).length
  const isTasksPlural = todosLength != 1
  const taskWord = isTasksPlural ? 'tasks' : 'task'

  return (
    <header>
      <h1 className='text-gradient'>You have {todosLength} open {taskWord}.</h1>
    </header>
  )
}
