import './App.css';
import React, { Suspense } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
        
      },
    },
  });

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider
          theme={theme}
        >
          <Dashboard />
        </ThemeProvider>
      </Suspense>
    </>
  )
}

export default App

