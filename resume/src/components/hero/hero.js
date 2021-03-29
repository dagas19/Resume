import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="hero" className="s-hero target-section">
          <div className="s-hero__bg rellax" data-rellax-speed={-7} />
          <div className="row s-hero__content">
            <div className="column">
              <div className="s-hero__content-about">
                <h1>I'm Dovydas Savickas</h1>
                <h3>
                  I am a Oslo based full stack developer. I am able to create really cool looking, 
                  web applications to anyone who needs it. Scroll down and find out more about me. <a className="smoothscroll" href="#about">about me</a>.
                </h3>
                <div className="s-hero__content-social">
                  <a href="https://www.facebook.com/dovydas.savickas.37/"><i className="fab fa-facebook-square" aria-hidden="true" /></a>
                  <a href="https://github.com/dagas19"><i className="fab fa-github" aria-hidden="true" /></a>
                  <a href="https://www.instagram.com/Dovydas.Savickas.Dev/"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  <a href="https://www.linkedin.com/in/dovydas-savickas-5a47571a8/"><i className="fab fa-linkedin" aria-hidden="true" /></a>
                </div>
              </div> {/* end s-hero__content-about */}
            </div>
          </div> {/* s-hero__content */}
          <div className="s-hero__scroll">
            <a href="#about" className="s-hero__scroll-link smoothscroll">
              <span className="scroll-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z" /></svg>
              </span>
              <span className="scroll-text">Scroll Down</span>
            </a>
          </div> {/* s-hero__scroll */}
        </section> {/* end s-hero */}
      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}