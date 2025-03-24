import './hero.css'
import React from 'react'
import profileImg from "../assets/mahlekod.png"
import CV from "../assets/douglasmahleko.pdf"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa6";

export default function Hero(){
    return(
        <section id="hero" className='containerHero'>
            <div className='modes'>
                <img src={profileImg} alt="profile picture douglas" className="hero-image" />
            </div>
            <div className="info">
                <h1>Douglas <br /> Mahleko</h1>
                <h2>Full-Stack Web Developer</h2>
                <span>
                    <a href="https://github.com" target='_blank'><FaGithub /></a>
                    <a href="https://Linkedin.com" target='_blank'><FaLinkedin /></a> 
                </span>
                <p className="description" >With a passion for modern react applications for commercial and personal </p>
                <a href={CV} ><button className='hover' download >Resume</button></a>
            </div>
            
        </section>
    )
}