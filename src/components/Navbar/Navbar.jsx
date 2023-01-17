import React,{useState} from 'react';
//importing icons
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdRestaurantMenu} from 'react-icons/md';
//importing images
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const[toggleMenu,setToggleMenu]=useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app_navbar-logo'>
      <img src={images.gericht} alt="app-logo" />  
    </div>

    
    <div className='app_navbar-login'>
      <a href='#login' className='p__opensnas' style={{"color": "white"}}>Log In/Register</a>
      <div />
      <a href='/' className='p__opensans'>Book Table</a>
      
    </div>
    <div className="app_navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true)}/>


      {toggleMenu &&(
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdRestaurantMenu className="overlay__close" fontSize={27} onClick={()=>setToggleMenu(false)}/> 

          <ul className='app__navbar-smallscreen-links' style={{"color": "white"}}>
          <li className='p_opensans'><a href='#home'>Home</a></li>
          <li className='p_opensans'><a href='#about'>About</a></li>
          <li className='p_opensans'><a href='#menu'>Menu</a></li>
          <li className='p_opensans'><a href='#awards'>Awards</a></li>
          <li className='p_opensans'><a href='#contact'>Contact</a></li>


        </ul>

      </div> 
    )}
    </div>
  </nav>
  )
  }


export default Navbar;
