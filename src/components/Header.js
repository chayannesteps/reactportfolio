import React from 'react'

class Header extends React.Component{
    render() {
        return (
            <header class="header-background">
        <nav class="nav main-nav">
            <ul>
                <li><a href="#About-Me">
                    <h2>About Me</h2>
                </a></li>
                <li><a href="#Contact">
                    <h2>Contact Me</h2>
                </a></li>
                <li><a href="https://docs.google.com/document/d/1h6VDu-SY1QBDXmvUOtvrRrQ_L9Pu1L52b7ZroW9tXV4" target="_blank">
                    <h2>Resume</h2>
                </a></li>
                <li><a href="newProjectPage.html">
                    <h2>Projects</h2>
                </a></li>
            </ul>
        </nav>
        <h1 class="intro-name intro-name-large">
            Chayanne Stephen
        </h1>
        <p class="intro-name">Front-end/ UX UI Developer</p>
    </header>
        )
    }
}

export default Header