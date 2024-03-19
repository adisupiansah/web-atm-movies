import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MovieListTrending, searchMovie } from "../api";
import { useEffect, useState } from "react";

export default function TrendingMovie() {
  // data kosong untuk menampung api TMDB
  const [MovieTrending, setMovieTrending] = useState([]);

  useEffect(() => {
    MovieListTrending().then((results) => {
      setMovieTrending(results);
    });
  }, []);

  const TrendingMovieList = () => {
    return MovieTrending.map((movie, i) => {
      return (
        <Col md={2} xs={4} className="animasi" key={i}>
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt=""
            className="img-trending"
          />
        </Col>
      );
    });
  };

  const search = async (a) =>{
    if(a.length > 3) {
      const query = await searchMovie(a)
      setMovieTrending(query.results)
    }
  }

  return (
    <div className="trending">
      <Container>
        <h2 className="judul-trending" id="tren">Trending Movie</h2>
        <Form className="d-flex search-movie">
          <Col md={8} xs={9}>
            <Form.Control
              type="search"
              placeholder="Search Movie"
              className="form-search-movie"
              aria-label="Search"
              onChange={({target}) => search(target.value)}
            />
          </Col>
            <Button variant="mx-3 button-search-movie">Search</Button>
        </Form>
        <Row className="trending-mobile">
          <TrendingMovieList />
        </Row>
      </Container>
    </div>
  );
}
