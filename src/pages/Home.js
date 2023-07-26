import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2> Hello! I am John Angelo</h2>
            <div className='prompt'>
                <p> A full stack web-developer student of KodeGo with a passion of learning and creating.</p>
                <FacebookIcon/>
                <EmailIcon/>
                <GithubIcon/>
            </div>
        </div>
        <div className='skills'> 
          
          <h1>Skills</h1> 
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span> 
                HTML, CSS, BootStrap, ReactJS
              </span>
            </li>
            <li className='item'>
              <h2>Back-End</h2>
              <span> 
                MySQL
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span> 
                JavaScript, Node.js
              </span>
            </li>
          </ol>
        </div>
    </div>
  );
}

export default Home;