import Login from "./components/Login";
import Browse from "./components/Browse";

const routes =  [
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    }
];
export default routes;