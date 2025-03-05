import React from 'react'
import Search from './component/Search'
import AddButton from './component/AddButton'
import TodoList from './component/TodoList'

function App() {
  return (
    <div className='h-[100vh] w-full flex justify-center items-center '>
      <TodoList/>
    </div>
  )
}

export default App