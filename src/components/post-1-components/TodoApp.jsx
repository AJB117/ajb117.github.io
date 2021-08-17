import React, { useState } from 'react';

const Todo = ({ todo, idx, removePost}) => {
  return (
    <div>
      <li style={{display: 'inline-block'}}>
        {todo}
      </li>
      <button 
        style={{marginLeft: '10px'}} 
        onClick={() => removePost(idx)}
      > - </button>
    </div>
  )
}

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [todoText, setTodoText ] = useState("")

  const handleChangedPostText = (e) => {
    e.preventDefault()
    setTodoText(e.target.value)
  }
  
  const handleNewPost = (e) => {
    e.preventDefault()
    if (!todoText) {
      return;
    }
    setTodos(prevTodos => [...prevTodos, todoText])
    setTodoText('')
  }

  const handleRemove = (idx) => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== idx));
  }

  return (
    <div>
      <h4>
        Todos
      </h4>
      {
        todos.length ? 
        todos.map((todo, idx) => 
          <Todo 
            todo={todo} 
            idx={idx} 
            removePost={handleRemove} 
            key={idx}
          />)
        : null
      }

      <form onSubmit={handleNewPost}>
        <input 
          type="text" 
          onChange={handleChangedPostText} 
          value={todoText}
        />
        <button type="submit">+</button>
      </form>
    </div>
  )
}

export default TodoApp