import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <div>
        <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
          <h2>{this.props.cinemaInformation.name}</h2>
          <h2>{this.props.cinemaInformation.adress}</h2>
          <h2>{this.props.cinemaInformation.rating}</h2>
        </div>
      </div>
    )
  }
}
