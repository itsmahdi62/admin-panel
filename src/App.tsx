import './App.scss';
import { BrowserRouter  , Route  , RouterProvider, Routes, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Layout from './Layout';
import Login from './pages/Login/Login';
import User from './pages/User/User';
import Product from './pages/Product/Product';

const App = () => {



  const router = createBrowserRouter([
    {
      path:"/",
      element : < Layout />,
      children : [
        {
          path: "/",
          element: (<Home />)
        },
        {
          path: "users",
          element: (<Users />)
        },  
        {
          path: "/products",
          element: (<Products />)
        },
        {
          path: "/users/:id",
          element: (<User />)
        },
        {
          path: "/products/:id",
          element: (<Product />)
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ])


  return (
    <RouterProvider router={router}/>
  );


//  return (
//     <div>
//       <BrowserRouter>
//        <div className="App">
//         <main>  
//           <Routes>             
//             <Route path="/" element={<Home/>}/>
//             <Route path="/users" element={<Users />}/>  
//             <Route path="/products" element={<Products/>}/>
//           </Routes>
//         </main>
//        </div>
//       </BrowserRouter>
//     </div>
   
//   )
}

export default App;
