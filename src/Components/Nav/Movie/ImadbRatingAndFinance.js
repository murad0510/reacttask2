import React, { Component } from 'react'

export default class ImadbRatingAndFinance extends Component {
  render() {
    return (
      <div>
            <h1>Rating  :  {this.props.movie.imdbRating}</h1>
            <h1>Finance :  {this.props.movie.finance} $</h1>
      </div>
    )
  }
}
