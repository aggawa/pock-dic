import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import classnames from 'classnames'
import './css/Poke_ListItem.css'

function Poke_ListItem({ todo, onRemove, onToggle }) {
   const { id, text, checked } = todo

   // 더블클릭시 비활성화 코드
   // const img = document.querySelector('.img')
   // img.addEventListener('dbClick', function () {
   //    this.style.backgroundColor = 'gray'
   //    this.classList.add('dbclick')
   // })

   // const imgUrl = (todo.text += '.jpg')
   // console.log(imgUrl)
   // console.log(todo.text + '.jpg')
   // console.log(`${todo.text}.jpg`)
   return (
      <div className="TodoListItem">
         <div
            className={classnames('checkbox', { checked })}
            onClick={() => {
               onToggle(id)
            }}
         >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div>
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

// 그니까 이미지를 어떻게 텍스트 += '.jpg' ??
