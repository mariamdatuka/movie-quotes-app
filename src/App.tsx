import Home from "./pages/Home/Home"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Verify from "./pages/Verify/Verify";



function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:'/verify',
      element:<Verify/>
    }
  ]);


  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
