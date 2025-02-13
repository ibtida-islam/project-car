import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider} from '@clerk/clerk-react';


import SignInPage from './pages/SignInPage'
//import SignUpPage from './pages/SignUpPage'

import { SignedIn, SignedOut } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = "pk_test_Y2F1c2FsLXNoZWVwLTcxLmNsZXJrLmFjY291bnRzLmRldiQ"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    
    
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
    <Router>
     
        <SignedOut>
          <SignInPage />
        </SignedOut>
      
        <SignedIn>
        {/* <UserButton/> */}
          <App />
        </SignedIn>  

    </Router>
    </ClerkProvider>
      
    
    
  </React.StrictMode>
);

