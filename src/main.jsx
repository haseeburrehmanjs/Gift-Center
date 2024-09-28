import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Watches from './pages/Watches.jsx'
import Home from './pages/Home.jsx'
import Rings from './pages/Rings.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import LadiesWatches from './pages/LadiesWatches.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'watches',
        element: <Watches />
      },
      {
        path: 'rings',
        element: <Rings />
      },
      {
        path: 'ladiesWatches',
        element: <LadiesWatches />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>
)
