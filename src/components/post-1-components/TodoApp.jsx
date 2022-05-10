import React, { useState } from 'react';

const Todo = ({ todo, idx, removePost }) => {
  const [completed, setComplete] = useState(false);
  return (
    <div>
      <li
        style={{display: 'inline-block', textDecoration: completed ? 'line-through' : ''}}
      >
        <input type="checkbox"  onChange={(event) => setComplete((prev) => !prev)}/>
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