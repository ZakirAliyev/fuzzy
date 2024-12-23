import './App.css'
import {createBrowserRouter} from "react-router";
import {ROUTES} from "./routes/ROUTES.jsx";
import {RouterProvider} from "react-router-dom";

function App() {

    const routes = createBrowserRouter(ROUTES);

    return (
        <RouterProvider router={routes}/>
    )
}

export default App
