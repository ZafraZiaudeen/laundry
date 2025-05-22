import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.page'
import { BrowserRouter, Routes, Route } from "react-router";
import PricingPage from './pages/pricing.page';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
