import React, { useState, useCallback } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import './css/Poke_Insert.css'

function Poke_Insert({ onInsert }) {
   const [value, setValue] = useState('')

   const onChange = useCallback((e) => {
      setValue(e.target.value)
   }, [])

   const onSubmit = useCallback(
      (e) => {
         onInsert(value)
         setValue('') // value 값 초기화

         // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
         // 이를 방지하기 위하여 이 함수를 호출합니다.
         e.preventDefault()
      },
      [onInsert, value] // onInsert 자체도 useCallback으로 정의된 함수이며 todos state에 의존한다. 즉, todos가 변경될 때마다 onInsert 함수가 새로 만들어지므로 사용
   )

   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="추가할 포켓몬을 입력하세요" value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default Poke_Insert
