import { Container, Row, Col } from "react-bootstrap";
// import pr1 from "../image/popular1.jpg";
import { MovieListPopular } from "../api";
import { useEffect, useState } from "react";

export default function Popular() {
  // database kosong untuk menampung data dari tmdb api
  const [MoviePopuler, setMoviePopuler] = useState([]);

  useEffect(() => {
    MovieListPopular().then((results) => {
      setMoviePopuler(results);
    });
  }, []);

  const PopulerMovieList = () => {
    return MoviePopuler.map((movie, i) => {
      return (
        <Col md={2} xs={4} className="animasi" key={i}>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="" className="img-popular" />
        </Col>
      );
    });
  };

  return (
    <div className="Popular">
      <Container>
        <h2 className="judul-popular" id="populer">Populer</h2>
        <Row>
          <PopulerMovieList/>
          
        </Row>
      </Container>
    </div>
  );
}
