import React, {Component} from 'react'
import {Link} from 'gatsby'
import Logo from '../images/logo.svg'
import classnames from "classnames";


export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            scrolled: false,
            burgerOpen: false
          };
    }
    toggleBurgerMenu(e){
        this.setState({burgerOpen: !this.state.burgerOpen});
     }
    handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const scrolled = currentScrollPos > 0;
        this.setState({
            scrolled
        });
    };
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        window.addEventListener("burger toggle", this.toggleBurgerMenu);
    } 
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("burger toggle", this.toggleBurgerMenu);
    }
    
    render() {
        return (
            <nav
                className={classnames('', {
                'nav--scroll': this.state.scrolled
                })}
            >
                <div className='nav__content'>
                    <div className='nav__left'>
                        <Link className='nav__item' to='/'>
                            <img src={Logo} alt='website logo'/>
                        </Link>
                    </div>
                    <div className='nav__right'>
                        <div
                            className={classnames('burger-container',
                                {
                                    'burger-container--scroll': this.state.scrolled
                                } ||
                                'burger-container', this.state.burgerOpen ? 'burger-container--close' : ''
                              )}
                              onClick={e => this.toggleBurgerMenu(e)}
                        >
                            <div className='allBars'>
                                <div className='bar1'></div>
                                <div className='bar2'></div>
                                <div className='bar3'></div>
                            </div>
                        </div>
                        <div
                            className={classnames('menu',
                                this.state.burgerOpen ? 'show' : ''
                            )}
                        >
                            <Link to='/#work' className='nav__item'onClick={e => this.toggleBurgerMenu(e)}>Work</Link>
                            <Link to='/#skills'className='nav__item'onClick={e => this.toggleBurgerMenu(e)}>Skills</Link>
                            <Link to='/#about-me' className='nav__item'onClick={e => this.toggleBurgerMenu(e)}>About Me</Link>
                            <Link to='/#form' className='nav__item'onClick={e => this.toggleBurgerMenu(e)}>
                                <button className='button--secondary'>Get In Touch</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            
        )
    }
}