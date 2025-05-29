import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home.page'
import { ClerkProvider } from '@clerk/clerk-react';
import {Provider} from 'react-redux'; 
import {store} from './lib/store';
import { BrowserRouter, Routes, Route } from "react-router";
import PricingPage from './pages/pricing.page';
import SignInPage from './pages/sign-in.page';
import SignUpPage from './pages/sign-up.page';

import RootLayout from './layouts/root.layout';
import MainLayout from './layouts/main.layout';
import ProtectedLayout from './layouts/protected.layout';
import AdminProtectedLayout from './layouts/admin-protected.layout'
import Dashboard from './admin/pages/Dashboard.page';
import AdminMainLayout from './layouts/admin.main.layout';
import RedirectBasedOnRole from './layouts/redirect';
import CategoryManagement from './admin/pages/CategoryManagement';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to .env file");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
          
            <Route
              path="/"
              element={<RedirectBasedOnRole />}
            >
              <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="pricing" element={<PricingPage />} />
              </Route>
            </Route>
 <Route element={<ProtectedLayout />}>
           
           

            <Route element={<AdminProtectedLayout />}>
              <Route element={<AdminMainLayout />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                 <Route path="/admin/category" element={<CategoryManagement />} />
              </Route>
            </Route>
             
            </Route>

            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </ClerkProvider>
  </StrictMode>,
)

