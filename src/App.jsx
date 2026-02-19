import React from 'react'
import Navbar from "#components/Navbar.jsx";
import Welcome from '#components/Welcome';
import Dock from '#components/Dock';
import { Draggable } from 'gsap/all';
import gsap from 'gsap';
import { Finder, Resume, Safari, Terminal ,Text , Image} from '#windows';
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder />
      <Text/>
      <Image/>
     
    </main>
  );
};

export default App