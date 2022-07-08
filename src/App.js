import React, {userState} from "react";
import './App.css';
import logo from "./logo.svg";

const [nombre, apellido, ultimo_apellido]=["daniel", "molina", "yepes"];
console.log(nombre, apellido, ultimo_apellido);

const dishes=[
    "macaroni and cheese",
    "salmon",
    "salmon2 ",
    "tofu with vegetables"
];

const dDishes=dishes.map((dish,i)=>({id:i, name:dish}));

function Header(props){
    return (
        <div>
        <img alt="test" src={logo} width={24} height={24} />
            <div>{props.name}</div>
            yo soy la cabecera
            <ul style={{textAlign:"center"}}>
                {props.dishes.map((dish,i)=><li key={dish.id}>{dish.name}</li>)}
            </ul>
        </div>
    );    
}

function Footer(props){
    return (
        <div>
            Copyright {props.year}
        </div>
    );
}

function App({authorize}) {
    return authorize ? (<SecretComponent/>) : (<RegularComponent/>);
    
    return (
        <>
            <p>hi there</p>
            <Header name="daniel" dishes={dDishes}>
            </Header>
            <Footer year={new Date().getFullYear()} />
        </>
    );
}

function RegularComponent(){
    return (<h1>Todo el mundo puede verlo (condicional)</h1>);
}

function SecretComponent(){
    return (<h1>Super secret (condicional)</h1>);
}

function AppState(){
    return (<h1>mi super estado</h1>);
}

export default App;