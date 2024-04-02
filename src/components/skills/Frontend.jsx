import React from "react";


const Frontend = () => {
    return (
        <div className="skills_container">
            <div className="skills__content">
                <h3 className="skills__title">Frontend developer</h3>

                {/* <div className="skills_box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-html5"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-css3"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-javascript"></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-react"></i>
                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-git"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-nodejs"></i>
                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div> 
    </div> */}

                <div className="skills__info grid">
                    <div className="skills__box">
                        <i className="bx bxl-html5"></i>
                        <h3 className="subskills__title">HTML</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>

                    <div className="skills__box">
                        <i className="bx bxl-css3"></i>
                        <h3 className="subskills__title">CSS</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>

                    <div className="skills__box">
                        <i className="bx bxl-javascript"></i>
                        <h3 className="subskills__title">JavaScript</h3>
                        <span className="skills__subtitle">Intermediate</span>
                    </div>

                    <div className="skills__box">
                        <i className="bx bxl-react"></i>
                        <h3 className="subskills__title">React</h3>
                        <span className="skills__subtitle">Basic</span>
                    </div>

                    <div className="skills__box">
                        <i className="bx bxl-nodejs"></i>
                        <h3 className="subskills__title">Node JS</h3>
                        <span className="skills__subtitle">Basic</span>
                    </div>

                    <div className="skills__box">
                        <i className="bx bxl-git"></i>
                        <h3 className="subskills__title">Git</h3>
                        <span className="skills__subtitle">Basic</span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Frontend;