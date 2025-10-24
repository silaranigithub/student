import React, { useReducer } from 'react'

const UseReduceHook = () => {

    let initialstate={count:0}
    const reduce=(state,action)=>{
        switch(action){
            case "increment":
                return {count:state.count+1}
                 case "decrement":
                return {count:state.count-1}
                 case "reset":
                return {count:0}
                default:
                    return state
        }

    }
    const[state,dispatch]=useReducer(reduce,initialstate)
    console.log("hello")
  return (
    <div>
        <h1 className='text-3xl p-5'>{state.count} </h1>
         <button className='border p-2 m-2 bg-blue-400 text-white rounded-md' onClick={()=>dispatch("increment")}>Increment</button>
            <button className='border p-2 m-2 bg-blue-400 text-white rounded-md' onClick={()=>dispatch("decrement")}>Decrement</button>
            <button className='border p-2 m-2 bg-blue-400 text-white rounded-md' onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default UseReduceHook


// useReducer  accept two fun
// internally dispatch acts like hof it call the  reduce()
// useReducer: multiple functionality