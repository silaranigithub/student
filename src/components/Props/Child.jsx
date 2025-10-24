// const Child=(name)=>{
    // console.log(name.cname)
    

// 16/09/25------------>

    // const Child=(data)=>{
    //     console.log(data)

    const Child=({data:{id="user",img="https://media.istockphoto.com/id/1325997570/photo/bengal-cat-lying-on-sofa-and-smiling.webp?b=1&s=612x612&w=0&k=20&c=Dji2vg_KHUVHpi0WiqXYB5aBjJb0yM3QnAL5ck_f1kk="}})=>{
    console.log(id,img)
    return(
        //  <div id="child">
        //     {/* <h1>child</h1> */}
        //     {/* <h1>{name.name}</h1> */}

        // {/* { name.name.map((value)=>{
        //         return(
        //             <h1>{value}</h1>
        //         )
        //     })
        // } */}
        //  </div>


// 16/09/25--------------->

        // <div id="child">
        //     {
        //         data.map((ele)=>{
        //             return <p>{ele}</p>
        //         })
        //     }
        // </div>

        <div id="child">
            <img src={img} alt="" width={200}/>
            <h2>{id}</h2>
        </div>
         
    )
}
 export default Child

// default props : if im not giving any data then it shows default data
// to avoid the error we need default props
//  props is a object 
// parent have data but its deninig to give:undefined