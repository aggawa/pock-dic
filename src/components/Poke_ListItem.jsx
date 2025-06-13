import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import classnames from 'classnames'
import './css/Poke_ListItem.css'

// 더블클릭 손보기

function Poke_ListItem({ todo, onRemove, onToggle }) {
   const { id, text, checked } = todo

   const onDoubleClick = () => {
      const TodoListItem = {
         'background-color': 'gray',
      }
   }
   // 더블클릭으로 css를 어떻게 바꿀지 잘 모르겠습니다..

   return (
      <div className="TodoListItem" onDoubleClick={onDoubleClick}>
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
