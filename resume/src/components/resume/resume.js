import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume" className="s-resume target-section">
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <div className="resume-block__header">
                <h4 className="h3">Le Wagon bootcamp</h4>
                <p className="resume-block__header-meta">
                  <span>Web Development course</span> 
                  <span className="resume-block__header-date">
                    2020 October 20
                  </span>
                </p>
              </div>
              <p>
                After finishing Le Wagon bootcamp, I became developer who was able to build fully functioning
                ruby on rails web applications. I gain confidence and skills required to do the job.
              </p>
            </div> {/* end resume-block */}
          </div>
        </div> {/* s-resume__section */}
        <div className="row s-resume__section">
          <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Skills</h3>
          </div>
          <div className="column large-9 tab-12">
            <div className="resume-block">
              <p>
                These are my skills I have right now at this moment but every day I gain more experience with them.
              </p>
              <ul className="skill-bars-fat">
                <li>
                  <div className="progress percent75" />
                  <strong>HTML</strong>
                </li>
                <li>
                  <div className="progress percent75" />
                  <strong>CSS</strong>
                </li>
                <li>
                  <div className="progress percent35" />
                  <strong>Javascript</strong>
                </li>
                <li>
                  <div className="progress percent75" />
                  <strong>Figma</strong>
                </li>
                <li>
                  <div className="progress percent80" />
                  <strong>Ruby on Rails</strong>
                </li>
                <li>
                  <div className="progress percent80" />
                  <strong>Ruby</strong>
                </li>
                <li>
                  <div className="progress percent30" />
                  <strong>React</strong>
                </li>
              </ul>
            </div> {/* end resume-block */}
          </div>
        </div> {/* s-resume__section */}
      </section> {/* end s-resume */}
    );
      <resume id="home">
        ....
      </resume>
      </React.Fragment>
    );
  }
}