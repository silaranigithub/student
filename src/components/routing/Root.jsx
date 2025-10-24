import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'
// import About from './About'
// import Help from './Help'

// const Root=()=> {

//     const paths=createBrowserRouter([
//         { 
//             path:"/",
//             element:<Home/>
//         },
//         {
//              path:"/contact",
//             element:<Contact/>
//         },
//         {
//              path:"/about",
//             element:<About/>
//         },
//         {
//              path:"/help",
//             element:<Help/>
//         }

//     ])
//   return (
    
    
//         <RouterProvider router={paths}/>

//   )
// }

// export default Root



{/* <RouterProvider/> */}
// if there only "/" i.e the first component
// if we have more than one / then first one wiil be execute
// default componet of router is only one path

// if  the path is not exist then it give 404 not found output 
// each object define one one path
// npm i react-router-dom@latest








import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Help from './Help'
import Layout from './Layout'


const Root=()=> {

    const paths=createBrowserRouter([
        { 
            path:"/",
            element:<Layout/>,
            children:[
                 {
             path:"/",
            element:<Home/>
        },
                 {
             path:"/contact",
            element:<Contact/>
        },
        {
             path:"/about",
            element:<About/>
        },
        {
             path:"/help",
            element:<Help/>
        }


            ]
        },
       
    ])
  return (
    
    
        <RouterProvider router={paths}/>

  )
}

export default Root
