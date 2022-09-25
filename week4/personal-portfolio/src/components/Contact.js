import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    age: 0,
    diseases: "None",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    if(formDetails.name === "" || formDetails.diseases === "None"){
      e.preventDefault();
      if (formDetails.name === "" ) {
        setStatus({ success: false, message: 'Please enter your name!'});
      } else {
        setStatus({ success: false, message: 'Please choose one of the disease!'});
      }
    }
    else {
      e.preventDefault();
      setButtonText("Sending...");
      console.log(JSON.stringify(formDetails))
      let response = await fetch("https://1x7dzekz41.execute-api.ap-southeast-2.amazonaws.com/addValueDB", {
        method: "POST",
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = await response.json();
      // setFormDetails(formInitialDetails);
      if (result.Code === 200) {
        setStatus({ success: true, message: 'Message sent successfully'});
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.'});
      }
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                 <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility> */}
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Enquiries</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.fName} placeholder="First Name" onChange={(e) => onFormUpdate('fName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lName} placeholder="Last Name" onChange={(e) => onFormUpdate('lName', e.target.value)}/>
                    </Col> */}
                      <Col size={12} sm={9} className="px-1">
                        <input
                          type="text"
                          value={formDetails.name}
                          placeholder="Name"
                          onChange={(e) => onFormUpdate("name", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={3} className="px-1">
                        <input
                          type="number"
                          value={formDetails.age}
                          placeholder="Age"
                          min={18}
                          max={65}
                          onChange={(e) => onFormUpdate("age", e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        {/* <textarea rows="6" value={formDetails.diseases} placeholder="Issues" onChange={(e) => onFormUpdate('diseases', e.target.value)}></textarea> */}
                        <select
                         value={formDetails.diseases}
                         onChange={(e) => onFormUpdate('diseases', e.target.value)}
                        >
                          <option value="None">--None--</option>
                          <option value="Allergies">Allergies</option>
                          <option value="Flu">Flu</option>
                          <option value="Headaches">Headaches</option>
                          <option value="Stomach Aches">Stomach Aches</option>
                          <option value="Chickenpox">Chickenpox</option>
                        </select>
                        <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                        
                          
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
