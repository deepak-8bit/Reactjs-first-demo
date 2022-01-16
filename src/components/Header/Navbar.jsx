import React from 'react'
import { Link } from 'react-router-dom'
import  '../Style.css';

export default function Navbar() {
    return (
        <div>
<ul>
    <li> <Link to="/">Home </Link></li>
    <li>  <Link to="/about"> About Us </Link></li>
     <li> <Link to="/contact">contactus </Link></li>
      </ul>
        </div>
    )
}
