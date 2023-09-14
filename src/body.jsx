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
import { Link } from "react-router-dom";





const Body = () => {
    const [dett, setDett] = useState([]);
    const [movTitle, setMovTitle] = useState("");
    const [totalMovie, setTotalMovie] = useState([]);
    const [fav, setFav] = useState(true);
  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjA4OTlmZGRkODNlZDM4MWFhNDIzNjNiOTMzMmYxYiIsInN1YiI6IjY0ZmU0ZDhiYzJmZjNkMDExYmQ5Nzc2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1aQsmoI71SVBfYeWNoAVCC2xhyqsR3hC3UYXWOgvww",
      },
    };
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setDett(response.results.slice(0,10));
        })
        .catch((err) => console.error(err));
    }, []);
  
    const search = (e) => {
      setFav(false);
      e.preventDefault();
  
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movTitle}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setDett(response.results);
        })
        .catch((err) => console.error(err));
  
      setMovTitle("");
      // console.log(totalMovie);
    };
    return ( 
      <>
        
        
  


      <Container fluid>
        <Row className="header" >
          <Col xs={12} className="px-0">
            <Card className="text-white ">
             
              <Card.ImgOverlay className="px-md-5">
                <Card.Title>
                  {" "}
                  <Row>
                    <Col xs={3} className="px-0"><Image className="px-0 " fluid src={Logo} /> <span className="text-start"></span>  </Col>

                    <Col xs={6}>
                      <Form  onSubmit={(e) => search(e)}>
                        <Col>
                          <Form.Control
                          className="search text-white"
                            value={movTitle}
                            onChange={(e) => setMovTitle(e.target.value)}
                            placeholder="What do you want to watch?"
                          />
                        </Col>
                      </Form>
                    </Col>

                    <Col xs={3}  className="px-0 text-end">
                     <Image fluid src={menu} />
                    </Col>
                  </Row>
                </Card.Title>
                <Row className="fill ">
                  <Col className="d-flex align-items-end align-items-md-center">
                   <Card.Text class=" " >
                 <Image  src={Description} fluid />
              
                 
                </Card.Text>
                  </Col>
                </Row>
               
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5 mb-4">
          <Col xs={12} className="d-flex justify-content-between px-3">
                 <span className="fs-3">Featured Movie</span> <span className="d-flex align-items-center text-danger">See more</span>
          </Col>
        </Row>

        <Row>
          { dett.length > 0 ?
            dett.map((res) => {
              return (
               
                <Col
                  key={res.id}
                  xs={12}
                  md={4}
                  xl={3}
                  className="d-flex justify-content-around pb-5"
                >
                   <Link to={`/movies/${res.id}`}>
                  <Card className="border-0" >
                  
                    <Card.Img fluid className="w-100"
                      variant="top"
                      src={"https://image.tmdb.org/t/p/w500" + res.poster_path}
                    />
                     <Card.ImgOverlay>
       
        <Card.Text className="text-end ">
          <Image src={Icon}  className="sec" />
        </Card.Text>
       
      </Card.ImgOverlay>
                    <Card.Body className="ps-0">
                      <Card.Text>USA {res.release_date}</Card.Text>
                      <Card.Title>{res.title}</Card.Title>
                      <Card.Text className="d-flex justify-content-between ">
                      <Image src={imdb} /> <Image src={Tomatoes} />
        </Card.Text>
                    </Card.Body>
                  </Card>
                  </Link>
                </Col>
              
              );
            }): "loading"}
        </Row>

        <Row>
       
        </Row>
      </Container>
      </>

     );
}
 
export default Body;