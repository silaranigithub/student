import GrandChild from "./GrandChild"

const Child=(props)=>{
    console.log("from parent")
    console.log(props)
    return(
        <div>
            <GrandChild gdata={props.cdata} gage={props.cage}/>
        </div>
    )
}
export default Child