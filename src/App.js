import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Logo from "./images/Logo.svg"
import poster from "./images/Poster.svg"
import menu from "./images/Menu.svg"
import imdb from "./images/IMDB.svg"
import seeMore from "./images/See.svg"
import Description from "./images/Description Box.svg"
import Icon from "./images/Icon.svg"
import Tomatoes from "./images/Tomatoes.svg"
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
