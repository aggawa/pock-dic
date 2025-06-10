import React from 'react'
import Poke_ListItem from './Poke_ListItem'
import './css/Poke_List.css'

function TodoList({ todos, onRemove, onToggle }) {
   return (
      <div className="TodoList">
         {todos.map((todo) => (
            <Poke_ListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         ))}
      </div>
   )
}

export default TodoList
