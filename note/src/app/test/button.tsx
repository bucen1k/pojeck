'use client'

import { useState } from "react"

export const Button = () =>{
    const [a, setA] =  useState(0)

    return <button onClick={() => setA(4)
    
    }>
         количество кликов = {a} 
    </button>
}