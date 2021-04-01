import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src="images/avatars/Profile.jpg" alt="" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              Hello my name is Dovydas I'm from Lithuania, 23 years old. I was working here in
              norway for more than a year until I decided change my career from construction
              worker to something than I would enjoy doing and all my life I was into computers
              either gaming or fixing them I been working with computer for long time and I'm
              passionate about it. So I found programming. So I decided get into this field and I
              joined Le Wagon bootcamp where I learned web development skills. I never thought
              office work could be interesting but when Im working with code I really get into it I
              enjoy doing it learning new skills all the time and building something new. Currently Im
              learning React my improving my skills farther I'm also interested in other in Js
              frameworks. Despite my enjoyment with coding I also am very active person I love
              working out, snowboarding and living healthy lifestyle.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  Dovydas Savickas <br />
                  Oslo <br />
                  <a href="tel:+1975432345">+47 46 27 3648</a> <br />
                  <a href="mailto:#0">dovydas.savickas.dev@gmail.com.com</a>
                </p>
              </div>
              <div className="column w-1000-stack">
                
              </div>
            </div>
          </div>
        </div> {/* end row */}
      </section> {/* end s-about */}
    );
      <header id="home">
        ....
      </header>
      </React.Fragment>
    );
  }
}