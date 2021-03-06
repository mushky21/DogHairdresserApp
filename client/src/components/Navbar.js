import React from 'react';
import logo_image from '../logo_image.jpeg'

const Navbar = (props) => {

    return (
        <nav>
        <div className="nav-wrapper">
          <span>
            <a href="#" className="brand-logo">Dog Hairdresser</a>
          </span>
          <span>
            <img src={logo_image} alt="dog-haircut" className="circle responsive-img" />
          </span>

        </div>
      </nav>

    )
}

export default Navbar;