
// const Child=({props})=>{
    
//     return(
//         <div>
//             {
//                 (props==="sundari")?<h1>Mine</h1>:<h2>done</h2>
//             }
//             <button disabled={!(props==="sundari")}>
//                 {(props==="sundari")?"submit":"disabled"}
//             </button>
//         </div>
            
//     )
// }
// export default Child

// <button style={{backgroundColor:()}}>
//                 {(props==="sundari")?"submit":"disabled"}
//             </button>


import React from 'react';

const Child= ({result,age}) => {
  return (
    <div>{

//  const Childrendering = (props) => {
//   return (
//    <div>{
    //   props.props?<img src="https://cdn.pixabay.com/photo/2025/09/10/14/35/mushroom-9826526_1280.jpg"width={100}/>: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam sint obcaecati officia eveniet ut reiciendis molestiae incidunt sed, laudantium doloribus, error, aperiam aliquam suscipit blanditiis veniam minus accusantium dicta minima.</p>

     (result==="sundari" && age>=18)? <h1>PASS</h1>:<h1>FAIL</h1>

}</div>
  )
}

export default Child