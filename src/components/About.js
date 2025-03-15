import React from 'react'
import "../App.css"
import Resume from "../Image/KajalOvhal.pdf"

export default function About() {
  return (
    <div id='About'>
      <h3>A Bit About Me ✨</h3>
      <div>
        <p id='Aboutcontent-container'>
        Hey, I’m Kajal Ovhal, a passionate <strong>Web Developer & Computer Engineer</strong> who loves crafting seamless digital experiences. I specialize in building interactive, responsive, and user-friendly web applications with a keen focus on performance and aesthetics.<br/>
        💡 I thrive on solving problems with code, turning creative ideas into reality, and continuously expanding my skills in modern web technologies like React, JavaScript, and Bootstrap. My goal is to build intuitive and impactful solutions that enhance user experiences.<br/>
        ✨ Let’s connect and create something amazing!
        <a href={Resume} download={Resume}>click here to download my resume.</a>
        </p>
      </div>
    </div>
  )
}
