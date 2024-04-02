import React from "react";
import './project.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import data from "./Data";



const Projects = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

            } else {
                entry.target.classList.remove('show');
            }
        })
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        laptop: {
            breakpoint: { max: 1024, min: 900 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 900, min: 464 },
            items: 2
        },

        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    }




    return (
        <section className="container section" id="projects">
            <h3 className="section__title">Projects</h3>

            <Carousel responsive={responsive} className="project__container">


                {data.map((d, index) => (

                    <div className="project__card" key={d.name} >
                        <div className="project__image">
                            <img src={d.img} alt="No image" className="card__image" />
                        </div>

                        <div className="project__content">
                            <p className="project__name">{d.name}</p> <hr />
                            <p className="project__description">{d.description}</p>
                            <div className="project__link">
                                <a href={d.href} className="project__button" target="blank"><button >View More
                                </button></a>

                            </div>
                        </div>
                    </div>

                ))}


            </Carousel>

        </section >

    )
}

export default Projects;