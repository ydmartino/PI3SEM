import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './routes/Login.jsx'
import Chat from './routes/Chat.jsx'
import { ThemeProvider } from './components/Context/ThemeContext.jsx'
import { HttpProvider } from './components/Context/HttpContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/chat',
        element: <Chat />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HttpProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HttpProvider>
  </StrictMode>,
)
