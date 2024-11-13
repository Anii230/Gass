import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthContextProvider } from './context/authContext.jsx'; // Import the AuthContextProvider
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>  {/* Wrap App with AuthContextProvider */}
      <App />
    </AuthContextProvider>
  </StrictMode>
);
