import { Col, Container, Row, Nav, Form, Button } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={3} xs={4} className="peru">
                        <h3 className="judul-footer">Perusahaan</h3>
                        <div className="menu-footer">
                            <Nav.Link href="#" className="footer-link">Tentang perusahaan</Nav.Link>
                            <Nav.Link href="#" className="footer-link">Syarat pengguna</Nav.Link>
                            <Nav.Link href="#" className="footer-link">Kebijakan privasi</Nav.Link>
                        </div>
                    </Col>
                    <Col md={3} xs={4} className="bantuan">
                        <h3 className="judul-footer">Bantuan</h3>
                        <div className="menu-footer">
                            <Nav.Link href="#" className="footer-link">Pusat Bantuan ?</Nav.Link>
                        </div>
                    </Col>

                    <Col md={3}  className="complain">
                        <h3 className="judul-complain">Your Complaint</h3>
                        <div className="menu-complain">
                            <p className="text-complain">apakah ada keluhan dari web kami ? sebutkan!</p>
                        </div>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Complain"
                            className="me-2 form-complain col-12"
                            aria-label="Search"
                            />
                            <Button className="button-complain">send</Button>
                        </Form>
                    
                    </Col>

                    <Col md={3} className="socialmedia">
                        <h3 className="judul-socialmedia">Social Media</h3>
                        <div className="menu-socialmedia">
                            <p href="#" className="link-socialmedia">Ayo ikuti social media kami</p>
                            
                        </div>
                        <div className="menu-icon">
                            <Nav.Link href="#" className="footer-icon"><FaInstagram className="icn" size="30"/></Nav.Link>
                            <Nav.Link href="#" className="footer-icon"><FaTiktok className="icn" size="30"/></Nav.Link>
                            <Nav.Link href="#" className="footer-icon"><FaFacebook className="icn" size="30"/></Nav.Link>
                            <Nav.Link href="#" className="footer-icon"><FaYoutube className="icn" size='30' /></Nav.Link>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}