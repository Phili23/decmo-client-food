import React from "react";
import './index.css'
import linkedin from '../images/linkedinLogo.png'
import github from '../images/githubLogo.png'
import gmail from '../images/gmailLogo.png'
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about-container">
            <div className="">

                <h2><u>About this single page application ...</u></h2>
                <div className='about-description'>
                    <span className=""><u> - Necessary technologies:</u>
                        <ul className='tecnologies'>
                            <ul>[ ] React</ul>
                            <ul>[ ] Redux</ul>
                            <ul>[ ] Express</ul>
                            <ul>[ ] Sequelize - Postgres</ul>
                        </ul>
                    </span>
                <div className="text">
                    <p>
                        FoodApi is a Full Stack Web Application of an individual project,
                        held during my bootcamp in{" "}
                        <a
                            href="https://www.soyhenry.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            #soyHenry
                        </a>, being one of the 2 required projects.
                    </p>
                    </div>
                    <div className="text">
                    <p>
                        The technologies used here are Express, Sequelize, PostgreSQL,
                        React, Redux, and pure CSS, among others. This application uses the
                        API{" "}
                        <a
                            href="https://spoonacular.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            spoonacular.io
                        </a>{" "}
                        The general idea is to create an application in which you can see different food recipes along with relevant information about them using the spoonacular external api and from it you can, among other things:
                        <ul className='techs-text'>
                            <ul>-Search recipes</ul>
                                <ul>-Filter / Sort them</ul>
                                 <ul>-Create new own recipes</ul>
                                 <ul>-See details of a specific of Recipes</ul>
                        </ul>

                    </p>
                    </div>
                </div>
               
                <Link className="" to='/home'><button className='previus'>Back - Home Previus</button></Link>
                <div><span className='vg-logo'>FoodApi by @Phili2301</span><br /></div>
            </div>

            <div className="about-contact"><br /><br /><br />
                
                <br/>
                <div className="contact-container">
               {/*  <h3><u>Contact Me:</u></h3> */}
                    <div className="contact-item">
                        <a
                            href="https://www.linkedin.com/in/maria-del-carmen-rodriguez/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="fondo-img-link">
                                <img
                                    src={linkedin}
                                    alt="Logo LinkedIn"
                                    className="contact-item-img" // Linked-In
                                />
                            </div>
                        </a>
                        <span>LinkedIn</span>
                    </div>
                    <div className="contact-item">
                        <a
                            href="https://github.com/Phili2301"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={github}
                                alt="Logo GitHub"
                                className="contact-item-img-github" // GitHub
                            />
                        </a>
                        <span>GitHub</span>
                    </div>
                    <div className="contact-item">
                        <a
                            href="mailto:rmariacarmen78@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={gmail} alt="Logo Gmail" className="contact-item-img-gmail" />
                        </a>
                        <span>Gmail</span>
                    </div>
                </div>
            </div>
        </div>
    );
};