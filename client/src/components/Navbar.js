import React from 'react';
import logo_image from '../logo_image.jpeg'

const Navbar = (props) => {

    return (
        <nav>
        <div class="nav-wrapper">
          <span>
            <a href="#" class="brand-logo">Dog Hairdresser</a>
          </span>
          <span>
            <img src={logo_image} alt="edd" className="circle responsive-img" />
          </span>

        </div>
      </nav>

    )
}

export default Navbar;