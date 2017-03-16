import React, { Component } from 'react';
import DonutDisplay from './DonutDisplay';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      bestDonutId: 1
    }
    this.chooseBestDonut = this.chooseBestDonut.bind(this)
  }

  chooseBestDonut(id){
    this.setState({ bestDonutId: id })
  }

  render() {
    let donuts = this.props.donuts.foods.map(donut => {
      let chooseBestDonut = () => {
        this.chooseBestDonut(donut.id)
      }
      return(
        <DonutDisplay
          key={donut.id}
          id={donut.id}
          name={donut.name}
          imgUrl={donut.imgUrl}
          bestDonut={this.state.bestDonutId}
          chooseBestDonut={chooseBestDonut}
        />
      )
    })
    return(
      <div>
        {donuts}
      </div>
    )
  }
}

export default App;
