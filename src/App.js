import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Quiz from './Components/Quiz/Quiz';
import Stats from './Components/Stats/Stats';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';

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
         path: '/quiz',
         element: <Quiz></Quiz> 
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
      <Footer></Footer>
    </div>
  );
}

export default App;
