import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>Home</p>,
    errorElement: <p>Not found</p>,
  },
  {
    path: '/videos',
    element: <p>videos</p>,
  },
  {
    path: '/',
    element: <p>Home</p>,
  },
  {
    path: '/',
    element: <p>Home</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
