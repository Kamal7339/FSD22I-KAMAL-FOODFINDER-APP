import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container fluid>
        <Row>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: contact@foodrecipefinder.com</p>
            <p>Phone: +91-98765-43210</p>
          </Col>
          <Col md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <p>FAQs</p>
              </li>
             
              <li>
               <p>Privacy Policy </p>
              </li>
              <li>
                <p>Terms of Service</p>
              </li>
            </ul>
          </Col>
         
          <Col md={3}>
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a href="#Home" className="text-light">
                <i className="">
                  <BiLogoFacebookSquare />
                </i>
              </a>
              <a href="#Home" className="text-light">
                <i className="">
                  <BiLogoTwitter />
                </i>
              </a>
              <a href="#Home" className="text-light">
                <i className="">
                  <BiLogoInstagram />
                </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;