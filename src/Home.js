import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

import React from 'react';
import FadeIn from 'react-fade-in';

import { Link } from 'react-router-dom'

const Home = () => (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-light bg-light shadow-sm">
          <a class="navbar-brand" href='/'>
            <img src="favicon.ico" width="30" height="30" class="d-inline-block align-top mr-2" alt=""/>
            Cap-Tracker (Copper-Aluminium Price Tracker)
          </a>
        </nav>
        <div id='btn' class='mt-4 mx-4'>
          <FadeIn>
            <div class="text-center">
              <h1 class=''>Benvenuto su Cap-Tracker!</h1>
              <p>Traccia comodamente i prezzi dell'alluminio e del rame da casa!</p>
            </div>
            <Link to='/aluminium'>
              <button class='btn bg-light border-0' disabled>Alluminio</button>
            </Link>
          </FadeIn>
        </div>
      </header>
    </div>
)

export default Home;