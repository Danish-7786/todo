
"use client"
import AddTodo from '@/components/AddTodo'
import {useState } from 'react'
import { Header } from '@/components'
import InputText from '@/components/InputText'

export default function Home() {

  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
   const [todos, setTodos] = useState([])
   console.log(todos.length);
   
  
  return (
    <main className='h-screen flex flex-col '>
    
   <Header/>
   <div className='flex flex-col p-4 w-full'>
    <div>

   <InputText
   todos={todos}
   setTitle={setTitle}
   title={title}
   content={content}
   setContent={setContent}
   setTodos={setTodos}/>
     </div>
   <div>

   {todos.map((todo)=>(
     <AddTodo
     todo = {todo}
     title={todo.title}
     content={todo.content}
     key={todo.id}
     setTodos = {setTodos}

     todos = {todos}
     />
     ))}
       
     </div>
     </div>
          </main>
  )
}
