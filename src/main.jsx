



import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'





//import { BrowserRouter } from "react-router-dom";
//import { StrictMode } from 'react'

//VITE_CLERK_PUBLISHABLE_KEY = pk_test_ZXF1aXBwZWQtc2FsbW9uLTY4LmNsZXJrLmFjY291bnRzLmRldiQ
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(

  // <BrowserRouter>
  //   <StrictMode>
  // <App />
  //   </StrictMode>
  // </BrowserRouter>

  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <App />
  </ClerkProvider>

  


)
