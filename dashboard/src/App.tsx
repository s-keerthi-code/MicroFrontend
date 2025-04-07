import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'

import React, { Suspense, useEffect, useState } from 'react';
const Dashboard = React.lazy(() => import('./Dashboard'));
function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "http://localhost:4200/main.js"; // ✅ adjust this
   
    script.onload = () => {
      console.log("✅ main.js loaded");
      customElements.whenDefined('carousel-widget').then(() => {
        console.log("✅ <carousel-widget> is defined and ready");
        setIsLoaded(true);
      });
    };
    document.body.appendChild(script);
  }, []);
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

        </Routes>
      </BrowserRouter> */}
      <Dashboard />
      {isLoaded ? <carousel-widget /> : <p>Loading Carousel...</p>}
       {/* <user-profile></user-profile> */}
       </Suspense>
    </>
  )
}

export default App

