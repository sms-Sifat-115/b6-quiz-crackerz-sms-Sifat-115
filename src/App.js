import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main'

function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
         path: '/topics',
         element: <Topics></Topics> 
        },
        {
         path: '/stats',
         element: <Stats></Stats>   
        },
        {
         path: '/blogs',
         element: <Blogs></Blogs>   
        },

      ]
    }
])
  return (
    <div className="App dark:bg-slate-900 bg-white">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
