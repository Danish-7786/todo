"use client"
import React, { useState } from 'react'
import AddTodo from './AddTodo';
import { inputTextProps } from '@/types';
const InputText = ({todos,title,content,setTitle,setContent,setTodos}:inputTextProps) => {

  const submitBtnHandler =(e:any)=> {
    e.preventDefault();

   setTodos([
    ...todos,
    {
      title:title,
      content:content,
      isCompleted:false,
      id:Math.floor(Math.random()*1000)


   }])
   setTitle('');
   setContent('');


    
  }

  return (
    <div>
        <form action="" className='ml-2'>
            <input type="text" className='text-white outline-none bg-red-600 px-2 rounded-l-sm' value={title} placeholder='title' onChange={(e)=> setTitle(e.target.value)}/>
            <input type="text" className='text-white outline-none bg-lime-200' value={content} placeholder='content' onChange={(e)=> setContent(e.target.value)} />
            <button type="submit" className='bg-green-500 px-2 rounded-r-sm' onClick={submitBtnHandler} >+</button>
     
        </form>
    </div>
  )
}

export default InputText