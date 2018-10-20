import React from 'react'
import { Media, Nav, NavItem } from 'reactstrap'

export default class UnauthenticatedNav extends React.Component {

  render() {
    return (
      <Nav className="align-items-center mr-auto">
        <NavItem>
          <Media className="p-2 ml-2" style={{height: 50, width: 50 }} src="https://cdn2.iconfinder.com/data/icons/life-moments/496/gift-512.png" />
        </NavItem>
      </Nav>
    )
  }
}