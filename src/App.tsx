import Home from "./pages/Home/Home"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Verify from "./pages/Verify/Verify";
import Profile from "./pages/Profile/Profile";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:'/verify',
      element:<Verify/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
  ]);


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
