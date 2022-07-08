import React, {useState, useEffect, useReducer} from "react";

function AppReduces(){
    const [checked, toggle]=useReducer((checked) => !checked,false);
    
    return (
        <>
            <p>este es el output</p>
            <input type="checkbox" value={checked} onChange={toggle} />
            <p>{checked?"checked":"no checked"}</p>
        </>
    );
}

export default AppReduces;