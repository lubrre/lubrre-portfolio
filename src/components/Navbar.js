// import React + react-router-dom
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import icons
import * as FaIcons from "react-icons/fa";

// import button
import { Button } from "./Button";

// import css
import "./Navbar.css";

import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton ] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    }else{
        setButton(true)
    }
  };

  useEffect(()=>{
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div>
    <IconContext.Provider value={{color:'black'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            LUBRRE
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className="nav-item">
                <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                </Link>
            </li> */}

            <li className="nav-item">
                <Link to='/project' className="nav-links" onClick={closeMobileMenu}>
                    Projects
                </Link>
            </li>

            <li className="nav-item">
                <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                    About
                </Link>
            </li>

            <li className="nav-item">
                <Link to='/contact' className="nav-links  btn-contact" onClick={closeMobileMenu}>
                    Contact
                </Link>
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;

{
  /* <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}

            </ul>
        </nav>
        </IconContext.Provider> */
}
