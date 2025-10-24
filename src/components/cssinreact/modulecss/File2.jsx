import React from 'react'
import Style from "./file2.module.css"
const File2=()=> {
  console.log(Style)
//   {demo,remo}=Style()
  return (
    <div className={Style.remo}>
        <p className={Style.remo}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam minima nesciunt explicabo tempore excepturi officia a pariatur, rerum culpa cumque doloribus dolorem reprehenderit ratione est sed quam earum sapiente reiciendis?</p>
          {/* <p className={`${demo} ${remo}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam minima nesciunt explicabo tempore excepturi officia a pariatur, rerum culpa cumque doloribus dolorem reprehenderit ratione est sed quam earum sapiente reiciendis?</p> */}
    </div>
  )
}

export default File2