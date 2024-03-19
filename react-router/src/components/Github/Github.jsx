import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github=()=>{
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/shreyach21")
    //     .then((response)=>response.json())
    //     .then(data=>setData(data))
    //     .catch(e=>console.log(e))
    // },[])
    const data=useLoaderData()
    return(
        <div className="text-white text-center bg-gray-600 m-4 p-5 text-3xl flex flex-col items-center">
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} className="rounded-full mt-5"/>
        </div>
    )
}
export default Github;

export const githubInfoLoader= async()=>{
    const response= await fetch("https://api.github.com/users/shreyach21")
    return response.json()
}