import { Col, Container, Row } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <Container>
        <Row>
          <Col>
            <h2 className="judul-section col-md-6 col-sm-3">
              Temukan film favorit anda Nonton gratis di ATM Movies
            </h2>
            <p className="text-section col-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium suscipit excepturi
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
