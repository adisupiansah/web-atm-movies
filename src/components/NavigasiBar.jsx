import { Navbar, Container, Nav} from "react-bootstrap";
import logo from "../image/logo.png"

const NavigasiBar = () => {


  return (
    <div>

      <Navbar expand="lg" className="navbar fixed-top" variant="dark">
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="logo" className="navbar-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#tren" className="nav-link">Trending Movie</Nav.Link>
              <Nav.Link href="#populer" className="nav-link">Popular</Nav.Link>
              <Nav.Link href="#nowPlaying" className="nav-link">Now Playing</Nav.Link>
              <mapComing/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigasiBar
