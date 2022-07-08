import { BrowserRouter, Link, Outlet, useRoutes } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, Error404, Location} from "./pages";

function AppRouter(){
    // const routes = useRoutes([
    //     { path: '/', element: <Home /> },
    //     { path: 'events', element: <Events /> },
    //     { path: 'contact', element: <Contact /> },
    //     { path: 'about', element: <About /> },
    //     { path: 'services', element: <Location /> },
    //     { path: '*', element: <Error404 /> }
    // ]);

    // return routes;
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}>
                    <Route path="location" element={<Location />}/>
                </Route>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/*" element={<Error404 />}></Route>
            </Routes>
        </div>
    )
}

export default AppRouter;