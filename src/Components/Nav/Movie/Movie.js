import React, { Component } from 'react'
import ImadbRatingAndFinance from './ImadbRatingAndFinance'

export default class Movie extends Component {
  render() {
    return (
        <div style={{border:"2px solid black",width:"26.3%" ,marginLeft:"5.3%",marginTop:"5%",backgroundColor:"#e5eaf5"}}>
          <h1>{this.props.movie.name}</h1>
          <img style={{width:"100%"}} alt='movie' src={this.props.movie.description}></img>
          <h1>Genre  :  {this.props.movie.genre}</h1>
          <ImadbRatingAndFinance movie={this.props.movie}></ImadbRatingAndFinance>
        </div>
    )
  }
}
