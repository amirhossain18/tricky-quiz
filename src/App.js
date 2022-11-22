

import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';

function App() {
  const router= createBrowserRouter([
    {
      path: '/', 
   
      element:<Main></Main>,
      children: [
       {
         path: '/',
         loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
         element:<Home></Home> 
   
        },
        {
         path: 'about',
         element:<About></About>
        }

      ]
      }

  ])
 
    
   
 


  
  return (
    <div className="App">
  
    <RouterProvider router={router}></RouterProvider>
    </div>
  
  );
}

export default App;
