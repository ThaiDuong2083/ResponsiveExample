import {useEffect, useState} from "react";

export const DisplayNumber= ({func})=>{
    const [numPlusFive, setNumPlusFive] = useState(0);
    useEffect(()=>{
        setNumPlusFive(func)
    },[func])

    return (
        <>
            <span>Plus five: {numPlusFive}</span>
        </>
    )
}