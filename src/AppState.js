import React, {useState, useEffect} from "react";

function AppState() {    
    const [state, updateStateCallback]=useState("happy");
    const [second, updateSecondCallback]=useState("other");
    
    useEffect(()=>{
        console.log(`it's ${state} around here!`);
    }, [state]);
    
    useEffect(()=>{
        console.log(`it's ${state} around here!`);
    }, [second]);
    
    
    console.log(state);
    return (
        <>
        <div>Be late {state}</div>
        <div>Be late second {second}</div>
        <button onClick={() => updateStateCallback("frustrated")}>frustrated</button>
        <button onClick={() => updateStateCallback("sad")}>sad</button>
        <button onClick={() => updateSecondCallback("asdf")}>other</button>
        </>
    );
}

export default AppState;