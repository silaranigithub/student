import Child from "./Child"

const Parent =(props)=>{
    console.log(props)
    return(
        <div>
            <Child cdata={props.data} cage={props.agedata}/>
        </div>
    )
}
export default Parent