import Login from "./components/Login";
import Browse from "./components/Browse";

const routes =  [
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    }
];
export default routes;