import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useLayoutEffect} from 'react';
import Axios from 'axios';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {

  let [patientList, setList] = useState([]);
  let length = 0
  // // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   const callAPI = async () => {
  //     Axios.get("https://ke7gmpy835.execute-api.ap-southeast-2.amazonaws.com/myFirstFunction", {}).then(
  //       (response) => {
  //         let results = JSON.parse(response.data.body);
  //         if (results.length > length){
  //           results.forEach((result) => {
  //             patientListDesc += `${result.id} Name: ${result.name}; Age: ${result.age}; Diseases: ${result.diseases} \n`
  //           });
  //           console.log("check check")
  //           console.log(patientListDesc)
  //           const descResult = patientListDesc
  //           setDesc(descResult)
  //           length = results.length
  //         }
         
  //       }
  //     );
  //   }
    
  //   callAPI()
  // });

  useLayoutEffect(() => {
    //check local token or something
    const callAPI = async () => {

      Axios.get("https://ke7gmpy835.execute-api.ap-southeast-2.amazonaws.com/myFirstFunction", {}).then(
        (response) => {
          let results = response.data.body;
          if (results.length > length){
            patientList = results
            setList(results)
            length = results.length
          }
         
        }
      );
    }
    
    callAPI()
}, []);
  return (
    <div className="App">
      <NavBar />
      <Banner data={patientList}/>
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
