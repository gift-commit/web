import React from 'react'
import Header from '../components/head'

export default class Index extends React.Component {
  
  render() {
    return (
      <div style={{height: "100vh"}}>
        <Header loggedIn={true} title="Index"/>
      </div>
    )
  }
}