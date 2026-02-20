import { locations } from '#constants/constant'
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import React from 'react'
import {Draggable} from 'gsap/Draggable';
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';

const projects=locations.work?.children ?? [];
const Home = () => {

    useGSAP(()=>{

        Draggable.create(".folder");

    },[]);

    const {setActiveLocation} = useLocationStore();

    const {openWindow}=useWindowStore();

    const handleOpenProject=(project)=>{
        setActiveLocation(project);
        openWindow("finder");
    }
  return (
    <section id="home">
        <ul>
            {projects.map((project)=>(
                <li key={project.id} className={clsx("group folder",project.windowPosition)}
                onClick={()=>handleOpenProject(project)}>
                    <img src="/images/folder.png" alt={project.name}/>
                    <p>{project.name}</p>

                </li>


            ))}
        </ul>

    </section>
  )
}

export default Home