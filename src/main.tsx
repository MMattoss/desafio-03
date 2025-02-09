import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { ClerkProvider } from '@clerk/clerk-react'
import Home from './pages/home/Home.tsx'
import App from './App.tsx'
import './index.css'
import Login from './pages/auth/Login.tsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />}/>
          </Route>
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
)
