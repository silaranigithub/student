// import JsxRules from "./components/jsx-rules/JsxRules"
// import PropsHome from "./components/Props/PropsHome"
// import ComponentRules from "./components/ComponentRules/ComponentRules"

// import Parent from "./components/Props/Parent"
// import Child from "./components/Props/Child"
// import PropsDrilling from "./components/Props/propsDrilling/PropsDrilling"
// import Conditional_Rendering from "./components/coditionalP_rendering/Conditional_Rendering"



// const App=()=>{
//     return(
//          <div >
//             {/*<JsxRules/>*/}
//             {/* <ComponentRules/> */}
//             {/* <PropsHome/> */}
//             {/* <Parent/>
//             <Child/> */}

// {/* 16/09/25-------------------------------> */}

//             {/* <PropsDrilling/> */}
//             {/* <PropsHome/> */}

//             <Conditional_Rendering/>
            
//          </div>
         
//     )
// }
//  export default App



// import React from 'react'
// import ClassTask from './ClassTask'

// const App=()=> {
//   return(
//   <div>
//     <ClassTask/>
//   </div>
//   )
// }

// export default App



// import { useState } from "react";

// export default function App() {
//   const [showText, setShowText] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {/* Button */}
//       <button
//         onClick={() => setShowText(true)}
//         className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
//       >
//         Show Heading
//       </button>

//       {/* Conditionally Rendered Heading */}
//       {showText && <h1 className="mt-6 text-3xl font-bold text-gray-800">Hello, I am a Heading!</h1>}
//     </div>
//   );
// }



import React from 'react'
import AxiosHome from './components/axiosconcept/AxiosHome'
import ModuleCss from './components/cssinreact/modulecss/ModuleCss'
import File1 from './components/cssinreact/modulecss/File1'
import GlobalCss from './components/cssinreact/globalcss/GlobalCss'
import InlineCss from './components/cssinreact/inlinecss/InlineCss'
import TailwindCss from './components/tailwindcssConcept/TailwindCss'
import UseReduceHook from './components/useReduceHook/UseReduceHook'
import UseReduceHookForm from './components/useReduceHook/UseReduceHookForm'
import ReduxHome from './components/reduxConcept/ReduxHome'
import "./index.css"
import ReduxToolkitHome from './components/reduxtoolkit/ReduxToolkitHome'
const App=()=> {
  return (
    <div>
      {/* <AxiosHome/> */}
      {/* <ModuleCss/> */}
      {/* <GlobalCss/> */}
      {/* <InlineCss/> */}
      {/* <TailwindCss/> */}
      {/* <UseReduceHook/> */}
      {/* <UseReduceHookForm/> */}
      {/* <ReduxHome/> */}
      <ReduxToolkitHome/>
      

    </div>
  )
}

export default App