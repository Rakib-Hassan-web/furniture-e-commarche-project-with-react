import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './Layout/LayOutOne'
import Home from './Components/Home'
import ShopPage from './Pages/ShopPage'

function App() {
  const [count, setCount] = useState(0)
const myroute=  createBrowserRouter(createRoutesFromElements(


<Route>

<Route index element={<Home/>} />
<Route path='/' element={<LayOutOne/>}>

<Route path='/Shop' element={<ShopPage/>} />





</Route>




</Route>






  ))

  return (
    <>
    <RouterProvider router={myroute}/>
     
    </>
  )
}

export default App
