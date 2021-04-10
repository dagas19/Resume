import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="portfolio" className="w-full bg-white pt-8">
          <h3 className="text-black text-5xl font-medium text-center mb-8">
            A Few Of My Latest Creations
          </h3>
        </div>
        <div className="grid-container">
          <div className="p-20  bg-white">
            <div className="bg-gray rounded-lg shadow-lg bord">
              <img
                src="images/portfolio/letsplay.png"
                alt=""
                className="rounded-t-lg"
              ></img>
              <div className="p-6">
                <p className="text-gray-900 mb-2">
                  Check out website
                  <a
                    href="https://www.letsplay.digital/"
                    className="text-gray-900 underline"
                  >
                    here
                  </a>
                </p>
                <a
                  href="https://github.com/dagas19/Lets-play"
                  className="text-gray-900 hover:text-purple-500 underline text-sm"
                >
                  Source code 👉
                </a>
              </div>
            </div>
          </div>
          <div className="p-20  bg-white">
            <div className="bg-gray rounded-lg shadow-lg bord">
              <img
                src="images/portfolio/jetnow.png"
                alt=""
                className="rounded-t-lg"
              ></img>
              <div className="p-6">
                <p className="text-gray-900 mb-2">
                  Check out website
                  <a
                    href="https://jet-now.herokuapp.com/"
                    className="text-gray-900 underline"
                  >
                    here
                  </a>
                </p>
                <a
                  href="https://github.com/dagas19/Jet-Now"
                  className="text-gray-900 hover:text-purple-500 underline text-sm"
                >
                  Source code 👉
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
