
import Child from "./Child"
const Parent=()=>{
    // const children_names=["sila","sonali","subha","swagatika","suprava","sima","sweta","somya"]
    // let i=0;


    // 16/9/25----------->

    // const str="some data"



    const data=[
        {
            id:"Mine",
            img:"https://cdn.pixabay.com/photo/2022/02/08/11/01/panda-7001162_1280.jpg",
        },
         {
            id:"Mine",
            img:"https://cdn.pixabay.com/photo/2022/02/08/11/01/panda-7001162_1280.jpg",
        },
        {
            id:"Mine",
            img:"https://cdn.pixabay.com/photo/2022/02/08/11/01/panda-7001162_1280.jpg",
        },
        {
            id:"Mine",
            img:"undefined",
        },
         {
            id:"undefined",
            img:"https://cdn.pixabay.com/photo/2022/02/08/11/01/panda-7001162_1280.jpg",
        },
    ]

    return(
//          <div id="parent" >
//             {/* <Child cname="sila"/>
//             <Child cname="suprava"/> */}
//             <ol>
//                  {
//                     children_names.map((value)=>{
//                         return <li>{value}</li>

                    
                        
//                         // children_names.map((value)=><li>{value}</li>
//                     })
//                 }
                


//                  {/* {
//                 children_names.map((value)=>{
//                     return (
//                         <Child name={value}/>
//                     )
//                 })
//             } */}
//             </ol>



          

// {/* if we use return without parethesis then it consider as one line */}
// {/* dont */}


//                 {/* <Child name=children_names/> */}


//          </div>
         



// 16/9/25------>

<div id="parent">
    {/* <Child data={str}/>
    <Child/>
    <Child data="tinku"/> */}


{   
 data.map((ele)=>{
        return(
            <Child data={ele}/>
        ) 
    })
}

<Child data={{}}/>
</div>

    )
}
 export default Parent



// if we passed anty object then only we get undefined

// sending the data from top component to innermost component with the help of child component: props driling
