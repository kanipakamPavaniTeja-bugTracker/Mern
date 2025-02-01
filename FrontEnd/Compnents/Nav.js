import React from 'react'
//import React, { useRef } from 'react';

import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Adddata</Link>
        <Link to="/search">Search</Link>
    </nav>
  )
}

export default Nav