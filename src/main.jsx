
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Blogs from './pages/Blogs.jsx'
import Blog from './pages/Blog.jsx'

const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/blogs",
        element: <Blogs />
    },
    {
        path: "/blogs/:uid",
        element: <Blog />
    }
]

const router = createBrowserRouter([{
    element: <App />,
    children: routes
}])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
