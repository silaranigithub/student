import React from 'react'

const TailwindCss=()=> {
  return (
    <div>
        {/* <h1 className="bg-green-500"> */}

         <h1 className="bg-[#932A28]">
      Hello world!
    </h1>
    </div>
  )
}

export default TailwindCss

// tailwind css vite
// if we want give our own css value then write bg-colour-name



// const TailwindCss=()=> {
//   return (
//     <div className='w-full h-[100vh] bg-slate-300'>
//         <nav className='w-full h-[78px] bg-amber-200 flex justify-between'>
//           <div className='w-[10%] h-full bg-red-600'></div>
//           <div className='w-[40%] h-full bg-green-400'>
//             <ul className='w-full h-full flex items-center justify-evenly text-xl font-bold uppercase text-indigo-600'>
//               <li>home</li>
//               <li>about</li>
//               <li>contact</li>
//               <li>help</li>
//             </ul>
//           </div>
//         </nav>

//         <div className='w-[300px] h-[300px] bg-gradient-to-r from-purple-400 to-pink-400 [20px] border border-[30px] border-green-400 rounded-3xl drop-shadow-2xl shadow-orange-300'>

//           <div className='w-[100px] h-[100px] bg-white absolute bottom-0 right-0'></div>
//         </div>
//         <button className='p-5 rounded-lg border-none bg-sky-300 text-white'>Submit</button>
//     </div>
//   )
// }

// export default TailwindCss