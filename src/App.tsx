import './App.scss';
import { BrowserRouter  , Route  , RouterProvider, Routes, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Layout from './Layout';
import Login from './pages/Login/Login';

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
          element: (<Home />)
        },  
        {
          path: "/",
          element: (<Users />)
        },
        {
          path: "/products",
          element: (<Products />)
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
