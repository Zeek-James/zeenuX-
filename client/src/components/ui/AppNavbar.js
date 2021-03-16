import React from 'react';
import {
    Navbar,
    NavbarBrand,
  } from 'reactstrap';
import { Hambuger } from './Hambuger';
  
export const AppNavbar = () => {
   
    
    return (
        <div>
        <Navbar color='dark' dark expand="md" className='mb-5 sticky-top'>
          <NavbarBrand href="/" tag='h1' >ZeenuX</NavbarBrand>

        </Navbar>
        <Hambuger />
        </div>
    )
}

