
import Body from "./body";
import MovieId from './movieId'


import { createBrowserRouter,
Route,
createRoutesFromElements,
RouterProvider
} from 'react-router-dom'

function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
          <Route index element={<Body />} />
        <Route path="movies/:id" element={<MovieId />} />
       
     
      </Route>
    
    )
  );
 

 
 
  return (
     
    <>
    
   <RouterProvider router={router} />
    
    </>

  )
   
 
}

export default App;
