
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Componnets/Home/Home';
import Main from './Componnets/main/main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('tshirt.json')
          },
          element: <Home></Home>

        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
