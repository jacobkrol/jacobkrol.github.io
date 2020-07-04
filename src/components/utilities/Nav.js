import React from 'react';
import NavTab from './NavTab';
import '../../styles/Nav.css';
import { GoThreeBars } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    state = {
        scrollPos: undefined
    };

    componentDidMount() {
        document.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleScroll);
        this.handleScroll();
    }

    componentWillUnmount() {
        const doc = document;
        if(doc.removeEventListener) {
            //remove scroll listening event
            doc.removeEventListener("scroll", this.handleScroll);
        } else if(doc.detachEvent) {
            //remove scroll listening event in older browsers
            doc.detachEvent("scroll", this.handleScroll);
        }
    }

    handleScroll = () => {
        //initialize scroll y position and menu object
        const y = document.scrollingElement.scrollTop;
        const menu = document.getElementById("menu-container");
        if(y < 120 && window.innerWidth > 604) {
            //update scrollpos state
            this.setState({scrollPos: y});
            //flag nav as 'transparent' for styling
            document.getElementById("menu").className = "transparent";
            //calculate scaled opacity and set to colors
            const opacity = String(Math.floor(100*y/120)/100);
            menu.style.backgroundColor = "rgba(85,85,85,"+opacity+")";
            menu.style.borderColor = "rgba(255,0,0,"+opacity+")";
        } else {
            //collapse menu if scroll or resize
            // document.getElementById("menu-container").className="collapsed";
            //unflag nav as 'transparent'
            document.getElementById("menu").className = "opaque";
            //set colors to full opacity >120px
            menu.style.backgroundColor = "#555";
            menu.style.borderColor = "red";
        }
    }

    toggleSmallNav = () => {
        if(window.innerWidth > 604) return;
        document.getElementById("menu-container").className = document.getElementById("menu-container").className === "expanded" ? "collapsed" : "expanded";
    }

    render() {
        return (
            <div id="menu">
                <GoThreeBars id="expand-icon" size={75} color={"#FFF"} onClick={this.toggleSmallNav} />
                <div id="menu-container" className="collapsed">
                    <div id="menu-button-row">
                        <Link to="/" id="icon" onClick={() => this.toggleSmallNav()} />
                        <MdClose id="collapse-icon" size={40} color={"#FFF"} onClick={this.toggleSmallNav} />
                    </div>
                    <ul id="menu-items">
                        <NavTab key="1" label="Home" route="/" onClick={() => this.toggleSmallNav()} />
                        <NavTab key="2" label="About Me" route="/about" onClick={() => this.toggleSmallNav()} />
                        <NavTab key="3" label="Projects" route="/projects" onClick={() => this.toggleSmallNav()} />
                        <NavTab key="4" label="Resume" route="/resume" onClick={() => this.toggleSmallNav()} />
                        <NavTab key="5" label="Contact" route="/contact" onClick={() => this.toggleSmallNav()} />
                    </ul>
                </div>
                <div id="menu-overlay" onClick={() => this.toggleSmallNav()}></div>
            </div>
        )
    }
}

export default Nav;
