import React, { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const generatePassword = useCallback(() => {
    let pwString = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      characters += "0123456789";
    }
    if (characterAllowed) {
      characters += "!@#$%^&*~";
    }
    while (pwString.length != length) {
      pwString += characters.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(pwString);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  
  const passWordRef=useRef(null)

  const copyPasswordToClipboard=useCallback(()=>{
    passWordRef.current?.select()
    // passWordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,characterAllowed,generatePassword])
  
  return (
    <div className="w-full max-w-md px-4 py-3 my-8 mx-auto shadow-md rounded-lg bg-gray-700 text-orange-500">
      <h1 className="text-center text-white my-4">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="w-full outline-none px-4 py-1"
          ref={passWordRef}
          readOnly
        />
        <button
        onClick={copyPasswordToClipboard}
         className="text-white bg-blue-700 px-3 py-1 outline-none shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-md gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={setCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
