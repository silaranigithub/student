const GrandChild=(props)=>{
    console.log("from child")
    console.log(props)
    return(
        <div>
            <h1>{props.gdata}</h1>
            <h2>{props.gage}</h2>
        </div>
    )
}
export default GrandChild