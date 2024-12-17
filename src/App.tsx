import React from 'react'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Bash from 'pages/Bash'
import Ffmpeg from 'pages/Ffmpeg'
import Git from 'pages/Git'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Root from 'pages/Root'
import Weight from 'pages/Weight'

import './reset.css'
import './style.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/bash', element: <Bash /> },
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
