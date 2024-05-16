import { ReactElement } from "react";
import HomePage from "./components/homepage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/**
 * An array of route objects for the application.
 * Each object in the array represents a route in the application.
 *
 * @type {Array<{path: string, element: JSX.Element}>}
 *
 * @property {string} path - The path of the route
 * @property {ReactElement} element - The React component that should be rendered when
 *                                    the route is matched
 *                                    
 *
 * @example
 * // Define a route for the homepage
 * {path: "/", element: <Homepage/>}
 */
const routes: Array<{ path: string; element: ReactElement; }> = [
    {path: "/", element: <HomePage/>},
];

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route key={path} path={path} element={element}/>
                ))}
            </Routes>
        </Router>
    );
}