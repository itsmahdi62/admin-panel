import './App.css';
import { BrowserRouter  , Route  , RouterProvider, Routes, createBrowserRouter} from 'react-router-dom';
import Home from './pages/Home/Home';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import Layout from './Layout';

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
