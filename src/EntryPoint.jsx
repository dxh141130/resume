import React, {Component} from 'react';
import ReactGA from 'react-ga';
import ResumeStore from "./store/ResumeStore";
import {Provider} from "mobx-react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './assets/css/media-queries.css';
import './assets/css/fonts.css';
import './assets/css/magnific-popup.css';
import './assets/css/default.css';
import './assets/css/layout.css';

class EntryPoint extends Component {

    constructor(props) {
        super(props);
        this.state={
            appStore: new ResumeStore()
        }

        ReactGA.initialize('UA-110570651-1');
        ReactGA.pageview(window.location.pathname);

    }

    render() {
        return (
            <Provider appStore={this.state.appStore}>
                <div className="App">
                    <Header />
                    <About />
                    <Resume />
                    <Portfolio />
                    <Testimonials />
                    <Contact />
                    <Footer />
                </div>
            </Provider>
        );
    }
}

export default EntryPoint;