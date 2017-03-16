import React, { Component } from 'react';

class DonutDisplay extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let delicious;
    if (this.props.bestDonut === this.props.id){
      delicious = "yummy"
    }
    return(
      <h1 onClick={this.props.chooseBestDonut} className={delicious}>{this.props.name}{this.props.imgUrl}</h1>
    )
  }
}

export default DonutDisplay
