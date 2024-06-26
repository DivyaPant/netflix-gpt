import Login from "./components/Login";
import Browse from "./components/Browse";

export default [
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    }
]