import React, { useCallback, useEffect, useRef, useState } from "react";

const Try = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordRef=useRef(null)

  const generatePassword=useCallback(()=>{
    let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pwString=""
    if(numberAllowed){
        characters+="0123456789"
    }
    if(characterAllowed){
        characters+="!@#$%^&*~"
    }
    while(pwString.length!==length){
        pwString+=characters.charAt(
            Math.floor(Math.random()*characters.length)
        )
    }
    setPassword(pwString)
  },[length,numberAllowed,characterAllowed,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,characterAllowed,generatePassword])

  const copyTextToClipboard=()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    if(passwordRef.current){
        passwordRef.current.focus()
        passwordRef.current.setSelectionRange(0,3)
    }
  }

  return (
    <div className="max-w-lg w-full bg-gray-700 text-orange-500 rounded-lg shadow-md my-8 p-4 mx-auto shadow-slate-500">
      <h1 className="text-white text-center text-2xl my-4">
        Password Generator
      </h1>
      <div className="flex rounded-lg overflow-hidden mb-4 shadow-xl">
        <input
          type="text"
          placeholder="password"
          value={password}
          ref={passwordRef}
          className="px-4 py-1 text-xl outline-none w-full "
          readOnly
        />
        <button 
        onClick={copyTextToClipboard}
        className="px-4 py-1 bg-blue-700 text-white text-xl shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-xl gap-x-3">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={30}
            className="cursor-pointer"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="num"
            onChange={()=>setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="num">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="char"
            onChange={()=>setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Try;
