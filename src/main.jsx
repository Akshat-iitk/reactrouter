import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children:[
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "about",
//         element:<About/>
//       },
//       {
//         path : "contact",
//         element:<ContactUs/>
//       }
//     ]
//   }
// ]) // one way of making routes 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} />
      <Route
       path='user/:userid' element={<User />} />   {/* this will take user is as param */}
      
      <Route loader={githubInfoLoader}
       path='github' element={<Github />} />   {/* this will take user is as param */}
    </Route>
  ) // new way of making router
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router}/>
  </React.StrictMode>,
)
