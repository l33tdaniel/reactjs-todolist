import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and vegetables',
        'Pick up the kids from school'
    ]



  return (
    <ul className ="item">
    {todos.map((todo, todoIndex)=> {
        return (
            <TodoCard key={todoIndex}></TodoCard>
        )
    })}
    </ul>
  )
}

// You can type "rfc" and press tab to generate a functional component