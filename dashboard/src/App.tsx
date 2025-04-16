import './App.css';
import React, { Suspense } from 'react';
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {  
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />

        </Routes>
      </BrowserRouter> */}
      <Dashboard />
  
      
       </Suspense>
    </>
  )
}

export default App

