import React, { useState, useRef, useCallback } from 'react'
import Poke_Template from './components/Poke_Template'
import Poke_Insert from './components/Poke_Insert'
import Poke_List from './components/Poke_List'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   // 고유 값으로 사용 될 id
   // ref 를 사용하여 변수 담기
   const nextId = useRef(4)

   // 할 일 등록
   const onInsert = useCallback(
      (text) => {
         const todo = {
            id: nextId.current,
            text, // text: text
            checked: false,
         }
         setTodos(todos.concat(todo))
         nextId.current += 1 // nextId 1 씩 더하기
      },
      [todos]
   )

   // 할 일 삭제
   const onRemove = useCallback(
      (id) => {
         const removedTodos = todos.filter((todo) => todo.id !== id)
         setTodos(removedTodos)
      },
      [todos]
   )

   // 할 일 완료, 미완료(토글)
   // 매개변수로 들어온 id에 해당하는 json 객체의 checked 값을 토글로 바꿔준다
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) =>
            todo.id === id
               ? {
                    ...todo,
                    checked: !todo.checked, // checked 값을 덮어쓴다
                 }
               : todo
         )

         setTodos(toggleTodos)
      },
      [todos]
   )

   return (
      <Poke_Template>
         <Poke_Insert onInsert={onInsert} />
         <Poke_List todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </Poke_Template>
   )
}

export default App
