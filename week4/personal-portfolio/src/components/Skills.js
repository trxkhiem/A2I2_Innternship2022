import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from 'react';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const Progress = ({done}) => {
    const [style, setStyle] = React.useState({});
    
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }
      
      setStyle(newStyle);
    }, 200);
    
    return (
      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
    )
  }


  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <h3 className = "skillMainTitle">Mobile Development</h3>
                              <Row className='skillSet'>
                                <Col lg={12} md={2} xl={10}>
                                <Progress done="90"/>
                                <Progress done="65"/>
                                <Progress done="70"/>
                                <Progress done="75"/>
                                </Col>
                                <Col md={2} xl={2}>
                                <h6 className='skillTitle'>Flutter</h6>
                                <h6 className='skillTitle'>React Native</h6>
                                <h6 className='skillTitle'>Swift</h6>
                                <h6 className='skillTitle'>Kotlin</h6>
                                </Col>
                              </Row>
                            </div>
                            <div className="item">
                              <h3 className = "skillMainTitle">Frontend Development</h3>
                              <Row className='skillSet'>
                                <Col lg={12} md={2} xl={10}>
                                <Progress done="70"/>
                                <Progress done="80"/>
                                <Progress done="80"/>
                                </Col>
                                <Col md={2} xl={2}>
                                <h6 className='skillTitle'>React JS</h6>
                                <h6 className='skillTitle'>Svelte</h6>
                                <h6 className='skillTitle'>HTML, CSS, Bootstrap</h6>
                                </Col>
                              </Row>
                            </div>
                            <div className="item">
                              <h3 className = "skillMainTitle">Backend Development</h3>
                              <Row className='skillSet'>
                                <Col lg={12} md={2} xl={10}>
                                <Progress done="75"/>
                      
                                </Col>
                                <Col md={2} xl={2}>
                                <h6 className='skillTitle'>Node JS</h6>
                               
                                </Col>
                              </Row>
                            </div>
                            <div className="item">
                              <h3 className = "skillMainTitle">Services</h3>
                              <Row className='skillSet'>
                                <Col lg={12} md={2} xl={10}>
                                <Progress done="85"/>
                                <Progress done="70"/>
                                <Progress done="70"/>
                                </Col>
                                <Col md={2} xl={2}>
                                <h6 className='skillTitle'>Firebase</h6>
                                <h6 className='skillTitle'>AWS</h6>
                                <h6 className='skillTitle'>Microsoft Azure</h6>
                                </Col>
                              </Row>
                            </div>
                            <div className="item">
                              <h3 className = "skillMainTitle">Other Programing Languages</h3>
                              <Row className='skillSet'>
                                <Col lg={12} md={2} xl={10}>
                                <Progress done="80"/>
                                <Progress done="70"/>
                                <Progress done="70"/>
                                </Col>
                                <Col md={2} xl={2}>
                                <h6 className='skillTitle'>Python</h6>
                                <h6 className='skillTitle'>Java</h6>
                                <h6 className='skillTitle'>Java Script</h6>
                                </Col>
                              </Row>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}
