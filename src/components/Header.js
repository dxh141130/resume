import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

@inject("appStore")
@observer
class Header extends Component {
  render() {

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

          <div className="row banner">
              <div className="banner-text">
                  <h1 className="responsive-headline">{this.props.appStore.info.name}</h1>
                  <h3>I am a full stack Software-Engineer and certified application Solution-Architecture.</h3>
                  <hr/>
                  <ul className="social">
                      {this.props.appStore.info.networks.map((network)=>{
                          return <li key={network.name}><a href={network.url}><i className={network.icon}></i></a></li>
                      })}
                  </ul>
              </div>
          </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
