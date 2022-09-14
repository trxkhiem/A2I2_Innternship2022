import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
export const Newsletter = ({}) => {

  return (
      <Col lg={12}>
        
        <div className="newsletter-bx wow slideInUp">
          {/* <Row>
            <Col lg={12} md={6} xl={9}>
              
            </Col>
            <Col md={6} xl={3}>
            <button className="connectButton" onClick={() => {
              console.log("hihihihi")
                setModalOpen(true);
              }}>Explore</button>
               {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </Col>
          </Row> */}
          <blockquote className="callout quote EN">
          Good health is not something we can buy. However, it can be an extremely valuable savings account.
            <cite> - Anne Wilson Schaef</cite>
          </blockquote>
        </div>
      </Col>
  )
}
