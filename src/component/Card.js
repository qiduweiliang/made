import React, { Component } from 'react'
import { Link } from "react-router";
import {browserHistory} from "react-router";
class Card extends React.Component {
  handleJump(){
    let address = this.props.url
		browserHistory.push(`/blog/${address}`)
	}
  render () {
    return(
    <div className="col-sm-4 col-md-4 xxx">
      <div className="thumbnail">
        <img src={this.props.img} />
        <div className="caption">
          <h3>{this.props.title}</h3>
          <p>{this.props.desc}</p>
          <p><a className="btn btn-primary" role="button" onClick={this.handleJump.bind(this)}>Button</a></p>
        </div>
      </div>
    </div>
    )
  }
}

export default Card;
