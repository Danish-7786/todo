"use client"

import { noteProps } from '@/types';

const AddTodo = ({title,content,todo,todos,setTodos}:noteProps )=> {
 const deleteHandler =() => {
  setTodos(todos.filter((el)=> el.id !== todo.id))
 }
  
  return (
  <div className='flex flex-col bg-gray-200 p-2 m-2 rounded-md h-fit w-40'>
    <h1 className='font-bold'>{title}</h1>
    <p>{content} </p>
    <button onClick={deleteHandler} className='text-orange-400 text-xs items-end text-end'>Delete</button>
  </div>

  )
}

export default AddTodo