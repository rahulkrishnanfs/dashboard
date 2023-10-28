import Signin from './Components/Signin/Signin';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Dashboard/Home';
import Orders from './Components/Dashboard/Orders';
import Dashboard from './Components/Dashboard/Dashboard';
import Customers from './Components/Dashboard/Customers';
import Products from './Components/Dashboard/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [ 
    {
      path: "home",
      element: <Home/>
    },
    {
      path: "orders",
      element: <Orders/>
    },
    {
      path: "customers",
      element: <Customers/>
    },
    {
      path: "products",
      element: <Products/>
    }
    ]
  },
]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
