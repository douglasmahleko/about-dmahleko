import './projects.css'
import React from 'react'
import House from "../assets/house.png"
import Kutsvaga from "../assets/kutsvaga.png"
import Block from "../assets/block.png"


export default function Projects(){
    return(
        <section id="projects" className='containerProject'>
            <h1 className="title">Projects</h1>
            <div className="pojectContainer">
                <a href="https://vs3ub-iaaaa-aaaak-qikbq-cai.icp0.io/" target='_blank' >
                    <img className='hover' src={House} alt="Project image" />
                    <h3>House Rent Application</h3>
                    <p>Block-chain Application</p>
                </a>
            </div>
            <div className="pojectContainer">
                <a href="#" target='_blank' >
                    <img className='hover' src={Kutsvaga} alt="Project image" />
                    <h3>House Rent Application</h3>
                    <p>Mobile Application</p>
                </a>
            </div>
        </section>
    )
}