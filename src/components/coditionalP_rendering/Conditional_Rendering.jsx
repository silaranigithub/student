
import React from 'react';

const Conditional_Rendering = () => {
    const time=true
    // if(false){
//   return (
//     <div>
//          <h1>true block</h1>
         
//     </div>
//   )
// }

// return(
//     <div>
//         <h1>false block</h1>
//     </div>
// )

return(
    <div>{
        
        false?<h1>hello</h1>: <h1>tata</h1>

        }
        
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae placeat numquam laboriosam consequatur, deserunt ipsa, id ex debitis quam veritatis officia incidunt tenetur odit ut. Dicta sed quaerat maiores.</h2>

    </div>
)
}
export default Conditional_Rendering;