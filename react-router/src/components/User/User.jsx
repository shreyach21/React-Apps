import React from "react";
import { useParams } from "react-router-dom";
const User=()=>{
    const {userid}=useParams()
    return(
        <div className="bg-gray-700 text-white text-center p-4 text-3xl max-w-xl mx-auto my-1 shadow-md rounded-md">User: {userid}</div>
    )
}

export default User;