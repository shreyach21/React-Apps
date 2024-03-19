import React, { useEffect, useState } from "react";

const Github=()=>{
    const [data,setData]=useState(0)
    useEffect(()=>{
        fetch("https://github.api.com/users/shreyach21")
        .then((response)=>response.json())
        .then(response=>setData(response.followers))
        .catch(e=>console.log(e))
    },[])
    return(
        <div className="text-white text-center bg-gray-700 ">
            Github Followers: {}
        </div>
    )
}
export default Github;