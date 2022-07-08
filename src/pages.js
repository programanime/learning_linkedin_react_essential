import React from "react"
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home(){
    return (
        <div>
            <h1>[Company website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About(){
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function Events(){
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact(){
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Error404(){
    const location=useLocation();
    console.log(location);
    return (
        <div>
            <h1>This page {location.pathname} does not exist!</h1>
        </div>
    );
}

export function Location(){
    return (
        <div>
            this is ourlocation
        </div>
    );
}