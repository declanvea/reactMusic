import React from 'react';
import {Navbar, NavbarToggler, NavbarBrand} from 'reactstrap';


class NavBar extends React.Component {
  render() {
    const navStyle = {
      background: "linear-gradient(-90deg, #000099, #0099FF)",
    }
    return (
      <div>
        <Navbar color="primary" light toggleable>
          <NavbarToggler right />
          <img style={{width:'50px'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" alt="react logo"/>
          <NavbarBrand style={{color:'white', fontSize:'25px'}}>Play What??</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
