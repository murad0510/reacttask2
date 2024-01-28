import React, { Component } from 'react'

export default class FeedBack extends Component {
  render() {
    return (
       <div style={{backgroundColor:"lightblue",border:"2px solid black",width:"26.3%" ,marginLeft:"5.3%",marginTop:"2%"}}>
        <h1>{this.props.feedBack.comment}</h1>
      </div>
    )
  }
}
