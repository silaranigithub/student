import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/counterSlice'

const Home = () => {
    const data=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    console.log(data)
  return (
    <div>
        <h1>Home</h1>
        <h1 className='text-3xl bg-slate-300'>{data.count}</h1>
        <button className='p-5 border-2 bg-orange-300' onClick={()=>dispatch(increment())}>Increment</button>
          <button className='p-5 border-2 bg-orange-300' onClick={()=>dispatch(decrement())}>Decrement</button>
            <button className='p-5 border-2 bg-orange-300' onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Home