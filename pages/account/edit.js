import React from 'react'
import Header from '../../components/head'

export default class EditAccount extends React.Component {
  
  render() {
    return (
      <div style={{height: "100vh"}}>
        <Header loggedIn={true} title="Index"/>
      </div>
    )
  }
}