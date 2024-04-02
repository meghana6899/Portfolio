import React, { useState } from "react";
import './education.css'

const Education = () => {
    return (
        <section className=" section" id="education">
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="education__container container">
                {/* <div className="education__tabs">
                    <div className="education__button education__active button--flex">
                        <i className="uil uil-graduation education__icon"></i>{" "}Education
                    </div>
                    <div className="education__button button--flex">
                        <i className="uil uil-briefcase-alt graduation-cap education__icon"></i> {" "} Experience
                    </div>
            </div> */}

                <div className="education__sections">
                    <div className="education__content education__content-active">
                        <div className="education__data">
                            <div>
                                <h3 className="education__title">BTech in ECE</h3>
                                <span className="education__subtitle">JNTUH College of Engineering, Sultanpur</span>
                                <div className="education__description">CGPA: 7.75</div>
                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i>2019 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="education__rounder"></span>
                                <span className="education__line"></span>
                            </div>
                        </div>

                        <div className="education__data">
                            <div></div>

                            <div>
                                <span className="education__rounder"></span>
                                <span className="education__line"></span>
                            </div>

                            <div>
                                <h3 className="education__title">Intermediate</h3>
                                <span className="education__subtitle">SR Junior College for Girls</span>
                                <div className="education__description">Percentage: 96.2</div>
                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i>2017 - 2019
                                </div>
                            </div>


                        </div>

                        <div className="education__data">


                            <div>
                                <h3 className="education__title">High School</h3>
                                <span className="education__subtitle">Sri Chaitanya High school  </span>
                                <div className="education__description">CGPA: 10.0</div>

                                <div className="education__calendar">
                                    <i className="uil uil-calendar-alt"></i>2017
                                </div>
                            </div>

                            <div>
                                <span className="education__rounder"></span>
                                <span className="education__line"></span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}

export default Education;