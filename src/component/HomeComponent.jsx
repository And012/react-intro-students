import {useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";

export default function Home() {
    const navigate = useNavigate()
    const [value, setValue] = useState('')
    const inputEl = useRef(null)
    useEffect(() => {
        console.log(inputEl)
    }, [inputEl])
    return <div>
        <h1>this is home</h1>
        <button onClick={() => navigate('/')}>go to main page</button>
        <input value={value} onChange={(event) => setValue(event.target.value)}/>
        <button
            onClick={() => {
                inputEl.current.focus()
            }}
        >click
        </button>
        <input ref={inputEl}/>
    </div>
}
