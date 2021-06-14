import React from 'react';
import Me from '../shared/images/Me.jpg'

function About() {
    return (
        <div className="container">
            <div className="row row-content ">
                <div className="col-12 col-md-3 align-self-center">
                        <img src={Me} alt="Me" id="myFace" />
                </div>
                <div className="col-12 col-md-1"></div>
                <div className="col-12 col-md-8 align-self-center text-left homeText">
                    <h3>About Me</h3>
                    <p>
                        I am an aspiring Software Engineer from the state of Hawai'i. I graduated from the University of Hawaii at Manoa with a degree in Computer Engineering. I am a fast learner with excellent time management who's always eager to learn more; which is why I decided to attend the Nucamp Web Developer boot camp to continue my education. Through a combination of these courses, I have gained a strong work ethic in individual and team based settings.
                    </p>
                </div>
            </div>
        </div>
        );
}

function Home(props) {
    return (
        <div>
            <About />
        </div>
    );
}

export default Home;   