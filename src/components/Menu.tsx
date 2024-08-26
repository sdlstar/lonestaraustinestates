'use client';

import { Navbar } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export function Menu() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar fluid className='my-2'>
        <Navbar.Brand href="" onClick={() => navigate('/')}>
          <span className="self-center whitespace-nowrap text-2xl font-semibold">805 Leonard St</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className='text-black' href="#" onClick={() => navigate('/')}>Home</Navbar.Link>
          <Navbar.Link className='text-black' href="#">Overview</Navbar.Link>
          <Navbar.Link className='text-black' href="#">Gallery</Navbar.Link>
          <Navbar.Link className='text-black' href="#">Availability</Navbar.Link>
          <Navbar.Link className='text-black' href="#" onClick={() => navigate('/contact')}>Contact</Navbar.Link>
          <Navbar.Link className='text-cyan-600' href="#" onClick={() => navigate('/booking')}>Book Now</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;