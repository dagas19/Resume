import React, { Component } from "react";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
