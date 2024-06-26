import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import routes from '../routes';

const Body = () => {
    const appRouter = createBrowserRouter(routes);
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body