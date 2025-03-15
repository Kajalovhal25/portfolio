import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faBootstrap,faGit,faNodeJs} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  return (
    <div id='Skills'>
      <h3>My Toolkit🚀</h3>
      <div id='skill-container'>
        <ul>
        <li><FontAwesomeIcon icon={faHtml5} color='#E34F26'id='skillIcon'/></li>
        <li><FontAwesomeIcon icon={faCss3} color='#1572B6'id='skillIcon'/></li>
        <li><FontAwesomeIcon icon={faJs} color='#F7DF1E'id='skillIcon'/></li>
        <li><FontAwesomeIcon icon={faReact} color='#61DAFB'id='skillIcon'/></li>
        <li><FontAwesomeIcon icon={faBootstrap} color='#563d7c' id='skillIcon'/></li>
        <li><FontAwesomeIcon icon={faGit} color='#f34f29'id='skillIcon'/></li>
        <li><FontAwesomeIcon icon={faNodeJs} color='#8cc84b'id='skillIcon'/></li>
        </ul>
      </div>
    </div>
  )
}
