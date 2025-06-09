import React from 'react'
import './css/Poke_Template.css'

function Poke_Template({ children }) {
   return (
      <div className="Poke_Template">
         <div className="app-title">TODO LIST</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default Poke_Template
