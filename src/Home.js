import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import Logo from './img/logo192.png'

import React from 'react';
import FadeIn from 'react-fade-in';

import { Link } from 'react-router-dom'

const Home = () => (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-light bg-light shadow-sm">
          <a className="navbar-brand" href='/'>
            <img src={Logo} width="30" height="30" className="d-inline-block align-top mr-2" alt=''/>
            Cap-Tracker (Copper-Aluminium Price Tracker)
          </a>
        </nav>
        <div id='btn' className='mt-4 mx-4'>
          <FadeIn>
            <div className="text-center">
              <h1 className=''>Benvenuto su Cap-Tracker!</h1>
              <p>Traccia comodamente i prezzi dell'alluminio e del rame da casa!</p>
            </div>
            <div className='text-center'>
              <Link to='/aluminium'>
                <button className='btn bg-light border-0 text-center my-4'>Pagina alluminio</button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </header>
    </div>
)

export default Home;