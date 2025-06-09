import React from 'react'
import Poke_ListItem from './Poke_ListItem'
import './css/Poke_List.css'

function Poke_List({ todos, onRemove, onToggle }) {
   return (
      <div className="Poke_List">
         {todos.map((todo) => (
            <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         ))}
      </div>
   )
}

export default Poke_List
