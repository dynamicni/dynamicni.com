import React from "react"
import { slide as Menu } from 'react-burger-menu'
import { Link } from "gatsby"
import { TiThMenu } from "react-icons/ti";


import "../styles/nav.css"
 
class Nav extends React.Component {
 
  render () {
    
    return (
      <Menu right noOverlay disableAutoFocus customBurgerIcon={<div className="btn-holder"><span className="menu-btn">Menu  </span><div className="icon"><TiThMenu className="icon" style={{verticalAlign: "middle"}}/></div></div>}>
        <Link className="nav-links" to="/about">About</Link>
        <Link className="nav-links" to="/people">People</Link>
        <Link className="nav-links" style={{borderBottom: "2px solid #c0c0c0"}}to="/contact">Contact</Link>
      </Menu>
    );
  }
}

export default Nav