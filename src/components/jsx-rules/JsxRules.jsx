const JsxRules=()=>{

//! All self-closing tags must and should to be close.

// !if we have more than one same level element then wrapper container is required.

// ! class attribute--> className || for--> htmlFor

// !  dom events(lower case) onclick ---> synthetic events(camel case) onClick

// ! JSX expression({}) (to access the js variables inside(html code) jsx) 

// multiline commnets are not allowed in jsx

    // return(
    //     <div>JsxRules</div>

    // )

    return(
        <div className="">
            <label htmlFor=""></label>
            
        </div>
    )
}
export default JsxRules