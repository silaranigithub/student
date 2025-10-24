import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Page2 = () => {

  const {count}=useSelector((state)=>state)
  console.log(count)
  const dispatch=useDispatch()

  return (
    <div>
      <h1>Page 2 :{count}</h1>
      <button className='p-2 bg-blue m-2 border   bg-blue-500 rounded-lg' onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  )
}

export default Page2