import React, { lazy } from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Root from 'pages/Root'

import './reset.css'
import './style.css'

// import Weight from 'pages/Weight'

const Ffmpeg = lazy(() => import('pages/Ffmpeg'))
const Git = lazy(() => import('pages/Git'))
const Weight = lazy(() => import('pages/Weight'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/ffmpeg', element: <Ffmpeg /> },
      { path: '/git', element: <Git /> },
      { path: '/weight', element: <Weight /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
