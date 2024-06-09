import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from 'react-cookie';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authentication, {pageType} from './pages/Authentication.jsx';
import AddChallenge from './pages/AddChallenge.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Authentication pageType={pageType.LOGIN}/>
  },
  {
    path: "/register",
    element: <Authentication pageType={pageType.REGISTER}/>
  },
  {
    path: "/add_challenge",
    element: <AddChallenge />
  }
])
console.log(pageType)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <RouterProvider router={router} />
    </CookiesProvider>
    
  </React.StrictMode>,
)
