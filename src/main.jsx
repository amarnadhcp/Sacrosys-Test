import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient,QueryClientProvider,useQuery,} from "@tanstack/react-query";
const queryClient = new QueryClient();
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ToastContainer />
  </QueryClientProvider>
)
