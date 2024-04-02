import React, { Component } from 'react'

export default class Random extends Component {
    //constructor
    constructor(props){
        super(props)
        this.state = {cname:'auto'}
    }
    //method to change the value of state
    change(data){
      this.setState({cname:data})
    }
    //method

  render() {
    return (
      <>
      <div>
        <h1>Inside class compnent</h1>
        <h3>My car name is :{this.state.cname}</h3>

        <h3>Shared subject is :{this.props.sub}
        </h3>
      </div>
      <button onClick={()=>this.change('swift')}>Click</button>
      </>
    )
  }
}
