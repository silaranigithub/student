import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Page1 = () => {

const {count}=useSelector((state)=>state)
console.log(count)
const dispatch=useDispatch()

  return (
    <div>
      <h1>Page 1 :{count}</h1>
      <button className='p-2 bg-blue-500 rounded-lg m-2' onClick={()=>dispatch({type:"increment"})}>increment</button>
    </div>
  )
}

export default Page1