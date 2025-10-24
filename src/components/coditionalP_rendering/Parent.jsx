import Child from "./Child"



const Parent = () => {
//     const img=true
    
//   return (
//     <div>{
        
//        <Childrendering props={img}/>
        
//         }
//     </div>
//   );



    const res=false
    return(
        <div>
            <Child result="sundari" age={23}/>
            <Child result="leela" age={20}/>
            <Child result="sundari" age={17}/>
        </div>
    )
}


export default Parent