import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/healthcare.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={9} className="text-center text-sm-start">
          <img src={logo} alt="Logo" />
            
          </Col>
          <Col size={12} sm={3} className="text-center text-sm-start">
            <p className="emailText">Email: abc@gmail.com</p>
            <p>Location: Melbourne 3000, VIC, Australia</p>
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
