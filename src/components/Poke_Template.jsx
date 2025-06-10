import React from 'react'
import './css/Poke_Template.css'

function Poke_Template({ children }) {
   return (
      <div className="TodoTemplate">
         <div className="app-title">관동지방 포켓몬 도감</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default Poke_Template
