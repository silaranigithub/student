import React, { createContext } from "react";
import Child1 from "./Child1"

export const GlobalContext=createContext()
const Parent=()=>{
    const data=[{},{},{}]
    return(
     <div>
       <GlobalContext value={data}>
           <Child1/>
       </GlobalContext>
     </div>
    )
}
export default Parent;