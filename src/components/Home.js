import React from 'react'
import "../App.css"
import profilePhoto from "../Image/profilePhoto.jpg.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div id='Home'>
      <div id='Photo-Container'>
        <img src={profilePhoto} alt='Kajal Ovhal' id='profilePhoto'/>
      </div>
      <div id="Homecontent-container">
          <h2>
            Hey! I'm <strong>Kajal Ovhal.</strong>
            <br />
            A passionate <strong>Web Developer.</strong>
          </h2>
          <a href="https://github.com/Kajalovhal" target='_blank'>
            <FontAwesomeIcon icon={faGithub} id="Icon"/>
          </a>
          <a href="https://www.linkedin.com/in/kajal-ovhal-92659325b/" target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} id="Icon"/>
          </a>
        </div>
    </div>
  )
}
