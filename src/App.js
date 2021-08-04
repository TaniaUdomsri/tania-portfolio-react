import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}

export default withAuthenticator(App);