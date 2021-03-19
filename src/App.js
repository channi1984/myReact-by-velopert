import React, { Component } from 'react';
import EventPractice from './EventPractice';
import MyComponent from './MyComponent'

class App extends Component {
  render() {
    return (
      <div className="box">
        <MyComponent name={11} age={2} />
        <EventPractice />
      </div>
    )
  }
}

export default App;