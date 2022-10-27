import { RouterProvider } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
