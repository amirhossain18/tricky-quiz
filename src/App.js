

import { createBrowserRouter,  RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Statistics from './Components/Statistics/Statistics';

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
        },
        {
          path: '/quiz/:ID',
          loader: async ({params})=>{
               return fetch(`https://openapi.programming-hero.com/api/quiz/${params.ID}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: 'Statistics',
          element:<Statistics></Statistics>
         },

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
