import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from "react-router-dom"
import './index.css'
import App from './App'
import AppRouter from './AppRouter'
import AppState from './AppState'
import AppFetch from './AppFetch'
import AppReduces from './AppReduces'
import Other from './Other'
import reportWebVitals from './reportWebVitals'

const authorize=false;

function AppTwo(){
    return (<h1> This is the secfond app </h1>);
}

// ReactDOM.render(
//     <div>
//         <Routes>
//             <Route path="/" elements={<Home />} />
//             <Route path="/about" elements={<About />} />
//             <Route path="/events" elements={<Events />} />
//             <Route path="/contact" elements={<About />} />
//         </Routes>
//     </div>,
//     document.getElementById("root")
// );

ReactDOM.render(
    <React.StrictMode>
        <h1>this is the router</h1>
        <Router>
            <AppRouter />
        </Router>
        <h1>this is the other</h1>
        <Other />
        <App authorize={authorize} />
        <h1>Another app</h1>
        <AppTwo />
        <h1>App state and useEffect</h1>
        <AppState />
        <h1>App reduces</h1>
        <AppReduces />
        <h1>App fetch</h1>
        <AppFetch user="programanime" />
    </React.StrictMode>
    ,
    document.getElementById('root')
);

// reportWebVitals(console.log);
reportWebVitals();
