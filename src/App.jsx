import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './Layout/LayOutOne'
import Home from './Components/Home'
import ShopPage from './Pages/ShopPage'
import LoginPage from './Pages/LoginPage'
import Registerpage from './Pages/Registerpage'
import ContactPage from './Pages/ContactPage'
import CheckOutPage from './Pages/CheckOutPage'
import BlogPage from './Pages/BlogPage'
import AboutPage from './Pages/AboutPage'
import ProductDetailsPage from './Pages/ProductDetailsPage'

function App() {
  const [count, setCount] = useState(0)
const myroute=  createBrowserRouter(createRoutesFromElements(


<Route>

<Route index element={<Home/>} />
<Route path='/' element={<LayOutOne/>}>

<Route path='/Shop' element={<ShopPage/>} />

<Route path='/LoginPage' element={<LoginPage/>} />
<Route path='/Registerpage' element={<Registerpage/>} />
<Route path='/ContactPage' element={<ContactPage/>} />
<Route path='/CheckOutPage' element={<CheckOutPage/>} />
<Route path='/BlogPage' element={<BlogPage/>} />
<Route path='/AboutPage' element={<AboutPage/>} />
<Route path='/ProductDetailsPage/:proIds' element={<ProductDetailsPage/>} />





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
