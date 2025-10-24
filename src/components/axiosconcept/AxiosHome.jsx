import React from 'react'
const AxiosHome=()=> {
    const fdata=async()=>{
        const {data}=await axios.get("https//fakestoreapi.com/")
    }
  return (
    <div>AxiosHome</div>
  )
}

export default AxiosHome












// reactmemo
// advancedhook>usememohook>usecallbackhook      Advancehooks.
// global context > global context pass a value props
// there is no routing component in react it is navigate one page to another in react