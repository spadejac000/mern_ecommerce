import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink
} from 'reactstrap';
  import {NavLink as Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md" className="mb-5">
        <div className="container">
          <NavbarBrand href="/">ECommerce</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" >
                  {/* <NavLink> */}
                    Shop
                  {/* </NavLink> */}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/cart">
                  {/* <NavLink> */}
                    <i className="fas fa-shopping-cart"></i>
                  {/* </NavLink> */}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;