import React,{useState,useEffect} from "react";

function AppFetch({user}){
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    
    useEffect(()=>{
        if(!user)return;
        setLoading(true);
        fetch(`https://api.github.com/users/${user}`)
        .then((data)=>data.json())
        .then(setData)
        .then(()=>setLoading(false))
        .catch(setError);
    }, [user]);
    if(loading)return <h1>Loading...</h1>
    else if(error)return <pre>{JSON.stringify(error, null, 2)}</pre>
    else if(data){
        return (
        <>
            <div>{data.name}</div>
            <img src={data.avatar_url} alt={data.name} />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>)
        
    }else{
        return (<div>no user available</div>)
    }
}

export default AppFetch;
