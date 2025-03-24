import './skills.css'
import React from 'react'
import { TiTick } from "react-icons/ti";

export default function Skills(){
    return(
        <section id="skills" className='containerSkills'>
            <h1 className='title' >Skills</h1>       
            <div className="skillList">
                <span>
                    <TiTick className='imgs' />
                    <p>REACT-NATIVE</p>
                    <TiTick className='imgs' />
                </span>
                <span>
                    <TiTick className='imgs' />
                    <p>PYTHON with Flask</p>
                    <TiTick className='imgs' />
                </span>
                <span>
                    <TiTick className='imgs' />
                    <p>PHP</p>
                    <TiTick className='imgs' />
                </span>
                <span>
                    <TiTick className='imgs' />
                    <p>REACTJS with Material UI, Boostraps and CSS</p>
                    <TiTick className='imgs' />
                </span>
                <span>
                    <TiTick className='imgs' />
                    <p>BLOCKCHAIN/TYPESCRIPT/MOTOKO</p>
                    <TiTick className='imgs' />
                </span>
                <span>
                    <TiTick className='imgs' />
                    <p>JAVA including SpringBoot</p>
                    <TiTick className='imgs' />
                </span>
                
            </div> 
            <hr />             
             
        </section>
    )
}