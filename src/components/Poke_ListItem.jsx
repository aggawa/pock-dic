import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import classnames from 'classnames'
import './css/Poke_ListItem.css'

// 더블클릭 손보기
const dblclick = document.querySelector('dblclick')

dblclick.addEventListener('dblclick', () => {})

function Poke_ListItem({ todo, onRemove, onToggle }) {
   const { id, text, checked } = todo

   return (
      <div className="TodoListItem" id="dblclick">
         <div
            className={classnames('checkbox', { checked })}
            onClick={() => {
               onToggle(id)
            }}
         >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div className="pic">
            <img src={'/imgs/' + todo.text + '.jpg'} alt={todo.text} />
         </div>
         <div
            className="remove"
            onClick={() => {
               onRemove(id)
            }}
         >
            삭제
         </div>
      </div>
   )
}

export default Poke_ListItem
