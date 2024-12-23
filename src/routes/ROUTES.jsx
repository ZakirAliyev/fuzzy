import MainPage from "../components/MainPage.jsx";
import Intersection from "../components/Intersection/index.jsx";
import Union from "../components/Union/index.jsx";
import Negation from "../components/Negation/index.jsx";
import Maxmin from "../components/Maxmin/index.jsx";

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <Intersection/>
            },
            {
                path: '/birlesme',
                element: <Union/>
            },
            {
                path: '/inkar',
                element: <Negation/>
            },
            {
                path: '/maxmin',
                element: <Maxmin/>
            },
        ]
    }
]