
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Layout from './components/layout/Layout'
import ErrorPage from './pages/ErrorPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element ={<Layout/>}>
          <Route index element ={<HomePage/>}/>
          <Route path='/shop' element ={<ShopPage/>}/>
          <Route path='/about' element ={<AboutPage/>}/>
          <Route path='/contact' element ={<ContactPage/>}/>
        </Route>
          <Route path='*' element ={<ErrorPage/>}/>
      </Route>
    )
  )

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
