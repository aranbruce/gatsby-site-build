import React from 'react'
import {Link} from 'gatsby'
import Logo from '../images/logo.svg'

const Header = () => {
    return (
        <nav id={'nav'}>
            <div className='nav__content'>
                <div className='nav__left'>
                    <Link className='nav__item' to='/'>
                        <img src={Logo} alt='website logo'/>
                    </Link>
                </div>
                <div className='nav__right'>
                    <div className='burger-container' id={'burger'}>
                        <div className='allBars'>
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                            <div className='bar3'></div>
                        </div>
                    </div>
                    <div className='menu' id={'menu'}>
                        <Link to='/#work' className='nav__item'>Work</Link>
                        <Link to='/#skills'className='nav__item'>Skills</Link>
                        <Link to='/#about-me' className='nav__item'>About Me</Link>
                        <Link to='/#form' className='nav__item'>
                            <button className='button--secondary'>Get In Touch</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}
window.onload = () => {
    // Header scroll functionality
    let scrollpos = window.scrollY
    const nav = document.getElementById('nav')
    const burger = document.getElementById('burger')
    const nav_height = nav.offsetHeight
    const menu = document.getElementById("menu")

    const add_class_on_scroll = () => {
        nav.classList.add("nav--scroll")
        burger.classList.add("burger-container--scroll")
    }
    const remove_class_on_scroll = () => {
        nav.classList.remove("nav--scroll")
        burger.classList.remove("burger-container--scroll")
    }

    window.addEventListener('scroll', function() { 
        scrollpos = window.scrollY;
        if (scrollpos >= nav_height) { 
            add_class_on_scroll() 
        }
        else { 
            remove_class_on_scroll() 
        }
    })

    // Burger open close functionality  
    if(burger) {
      var navItems = document.getElementsByClassName("nav__item")
  
      function openMenu() {
        menu.classList.add("show");
        burger.classList.add("burger-container--close");
      }
  
      function closeMenu() {
        menu.classList.remove("show");
        burger.classList.remove("burger-container--close");
      }
  
      function toggleMenu() {
        if (burger.classList.contains('burger-container--close')) {
          closeMenu();
        }
        else if (!burger.classList.contains('burger-container--close')) {
          openMenu();
        }
      }
  
      burger.onclick = toggleMenu
      for (let i = 0; i < navItems.length; i++){
          navItems[i].onclick = closeMenu;
      }
    }
  };
  

export default Header