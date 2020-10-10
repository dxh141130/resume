import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject("appStore")
@observer
class Resume extends Component {

    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {


        return (
            <section id="resume">

                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                {
                                    this.props.appStore.info.educations.map(school => {
                                        return <div key={school.schoolName}><h3>{school.schoolName}</h3>
                                            <p className="info">{school.degree} <span>&bull;</span><em
                                                className="date">{school.graduated}</em></p>
                                            <p>{school.description}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            this.props.appStore.info.jobs.map(job => {
                                return <div key={job.company}><h3>{job.company}</h3>
                                    <p className="info">{job.title}<span>&bull;</span> <em
                                        className="date">{job.years}</em></p>
                                    <p>{job.description}</p>
                                </div>
                            })
                        }
                    </div>
                </div>


                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">

                        <div className="bars">
                            <ul className="skills">
                                {
                                    this.props.appStore.info.skills.map(skill => {
                                        let className = 'bar-expand ' + skill.name.toLowerCase();
                                        return <li key={skill.name}><span
                                            style={{width: skill.level, backgroundColor: this.getRandomColor()}}
                                            className={className}/><em>{skill.name}</em></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="row certificate">
                    <div className="three columns header-col">
                        <h1><span>Certificate</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {
                            this.props.appStore.info.certificates.map(certificate => {
                                return(<div style={{display:'flex',justifyContent:'space-between',height:'150px'}}>
                                    <div key={certificate.name}>
                                        <img alt={certificate.name} src={certificate.img} style={{width: '200px'}}/>
                                    </div>
                                    <div>
                                        <h5><a href={certificate.url} target="_blank">{certificate.name}</a></h5>
                                        <p>{certificate.description}</p>
                                    </div>
                                </div>)
                            })
                        }
                    </div>

                </div>


            </section>
        );
    }
}

export default Resume;
