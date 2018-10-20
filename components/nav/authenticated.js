import React from 'react'
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Media, Nav, NavItem, NavLink } from 'reactstrap'

export default class AuthenticatedNav extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Nav className="align-items-center mr-auto">
        <NavItem>
          <Media className="p-2 ml-2" style={{height: 50, width: 50 }} src="https://cdn2.iconfinder.com/data/icons/life-moments/496/gift-512.png" />
        </NavItem>
        <NavItem>
          <NavLink preload href="/home">My Lists</NavLink>
        </NavItem>
        <NavItem>
          <NavLink preload href="/wishlists">Wishlists</NavLink>
        </NavItem>
        <NavItem>
          <NavLink preload href="/claimed">My Claimed</NavLink>
        </NavItem>
        <NavItem className="ml-auto mr-3">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              My Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Edit Profile</DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="text-danger">Sign Out</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      </Nav>
    )
  }
}