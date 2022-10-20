import React from 'react'
import twitterpic from './twitterlogo.png';
import linkedinpic from './linkedin.jpg';
import gmailpic from './gmaillogo.jpg';
// import phonepic from './phonee.png';


class Footer extends React.Component{
    render() {
        return (
            <footer class="main-footer">
        <div class="container main-footer-container">
        <h3 class="section-headers">
            Contact me here!
        </h3>
        <ul class="nav footer-nav">
            <a href="https://twitter.com/chaythecoder" target="_blank">
                <img src={twitterpic} alt="My twitter link"/>
            </a>
    
            <a href="https://www.linkedin.com/in/chayanne-s-71a272242/" target="_blank" >
                <img src={linkedinpic} alt="My linkedin link"/>
            </a>
    
            <a  href="mailto: Chayanne.stephen@gmail.com" target="_blank" >
                <img src={gmailpic} alt="My email link"/>
            </a>
    
            {/* <a class="Phonepic" href="tel: ***-***-****" target="_blank" rel="noreferrer">
                <img src={phonepic} alt="My number"/>
            </a> */}
        </ul>
        </div>
    </footer>
        )
    }
}

export default Footer
