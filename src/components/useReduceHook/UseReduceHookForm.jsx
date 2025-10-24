import React, { useReducer } from 'react'

const UseReduceHookForm = () => {

let initialState={
    name:"",
    email:"",
    password:""
}

const reducer =(state,action)=>{
    switch(action.type){
        case "update_form":
            return {...state,[action.key]:action.value};
        case "reset_form":
            return {...initialState};
    }
}
    const [state,dispatch]=useReducer(reducer,initialState);



const handleInput=(e)=>{
   const {name,value}=e.target
   dispatch({
    type:"update_form",
    key:name,
    value:value
   })
}

const handleForm=(e)=>{
    e.preventDefault()
    console.log(state);
    dispatch({
        type:"reset_form"
    })
}


  return (
    <div>
      <form onSubmit={handleForm} action="" className='w-[40%]  border-2 flex flex-col items-center justify-around p-5'>
        <label htmlFor="name">Name :
        <input className='p-2 border bg-slate-300 outline-none m-3' type="text" id='name' name='name'  onChange={handleInput} value={state.name}/></label>
        <label htmlFor="email">Email :
        <input className='p-2 border bg-slate-300 outline-none m-3' type="email" id='email' name='email' onChange={handleInput} value={state.email} /></label>
        <label htmlFor="password">Password :
        <input className='p-2 border bg-slate-300 outline-none m-3' type="password" id='password' name='password' onChange={handleInput}  value={state.password} /></label>
        <button type='submit' className='h-8 w-26 m-3  border bg-blue-600 text-xl'>Submit</button>
      </form>
    </div>
  )
}

export default UseReduceHookForm

// dispatch, reducer, action, payload


// redux: is a third  party state management library , global-state management library

// npm install redux react-redux