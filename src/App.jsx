import React from 'react'
import Navbar from "#components/Navbar.jsx";
import Welcome from '#components/Welcome';
import Dock from '#components/Dock';
import { Draggable } from 'gsap/all';
import gsap from 'gsap';
import { Terminal } from '#windows';
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
    </main>
  );
};

export default App