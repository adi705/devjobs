import { RouterProvider, createBrowserRouter ,Route} from 'react-router-dom';
import AllJobs from './pages/alljobs';
import SingleJob from './pages/singlejob';
import { loader as jobLoader } from './pages/alljobs';
import { loader as singlejobLoader } from './pages/singlejob';
import { useState } from 'react';
import Justest from './pages/justest';
import { GlobalProvider } from './context';



const router = createBrowserRouter([
   
  {
    path: '/',
    element: <AllJobs />,
    loader: jobLoader,
  },
  
  {
    path: '/single-job/:id',
    element: <SingleJob/>,
    loader: singlejobLoader,
  },
  
  { 
    path: '/test',
    element:<Justest rom="Hello, World!"  />
  },

]);

const App = () => {
 
  return (
    <GlobalProvider> <RouterProvider router={router}/></GlobalProvider>
  );
};
export default App;



