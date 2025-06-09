import React from 'react'
import classnames from 'classnames'
import './css/Poke_ListItem.css'

function Poke_ListItem({ todo, onRemove, onToggle }) {
   const { id, text, checked } = todo

   return (
      <div className="Poke_ListItem">
         <div
            className={classnames('checkbox', { checked })}
            onClick={() => {
               onToggle(id)
            }}
         >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
         </div>
         <div
            className="remove"
            onClick={() => {
               onRemove(id)
            }}
         >
            <MdRemoveCircleOutline />
         </div>
      </div>
   )
}

export default Poke_ListItem
