import React, { Component } from 'react'

import ReactStickiness from 'react-stickiness'

export default class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <ReactStickiness
          className="custom-class"
          topOffset={10}
        >
          <div>
            Hola Mundo
          </div>
          <div>
            This is the world
          </div>
        </ReactStickiness>
      </div>
    )
  }
}
