import React, {Component} from 'react';
import {inject, observer} from "mobx-react";


@inject("appStore")
@observer
class About extends Component {
    render() {

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={this.props.appStore.info.avatarImg}
                             alt="Dongcai Huang Profile Pic"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{this.props.appStore.info.aboutMe}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{this.props.appStore.info.name}</span><br/>
                                    <span>{this.props.appStore.info.street}<br/>
                                        {this.props.appStore.info.city} {this.props.appStore.info.state}, {this.props.appStore.info.zip}
                                    </span><br/>
                                    <span>{this.props.appStore.info.phone}</span><br/>
                                    <span>{this.props.appStore.info.email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={this.props.appStore.info.resumeUrl} target="_blank" className="button"><i
                                        className="fa fa-download"></i>Download
                                        Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;
