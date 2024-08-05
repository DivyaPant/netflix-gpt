import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';


function App() {
  const appRouter = createBrowserRouter([
    {
    element: <Body/>,
    children : routes
  }
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
</Provider>
  );
}

export default App;
