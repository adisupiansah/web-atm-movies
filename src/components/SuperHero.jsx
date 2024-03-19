import { Container, Row, Col } from "react-bootstrap";
// import sp1 from "../image/sp1.jpg";
import { useEffect, useState } from "react";
import { MovieSuperHero } from "../api";

export default function SuperHero() {

  // data kosong untuk menmpung data API dari TMDB
  const [superHero, setSuperHero] = useState([])

  useEffect(() => {
    MovieSuperHero().then((results) => {
      setSuperHero(results);
    })
  }, [])

  const SuperHeroMovieList = () => {
    return superHero.map((movie,i) => {
      return (
        <Col md={2} xs={4} className="animasi" key={i}>
            <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" className="img-hero" />
         </Col>
      );
    })
  } 


  return (
    <div className="super-hero">
      <Container>
        <h2 className="judul-hero" id="nowPlaying">Now Playing</h2>
        <Row>
         
         <SuperHeroMovieList/>
          
        </Row>
      </Container>
    </div>
  );
}
