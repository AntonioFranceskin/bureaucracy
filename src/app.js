import React, { Component } from 'react';
import Line from './line'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     people: ['Adriana','Evelyn','Maria','Angel','Carmen', 'Paris'],
     line1: [],
     line2: [],
     line3: []
    }
    this.moveToLine1 = this.moveToLine1.bind(this);
    this.moveToLine2 = this.moveToLine2.bind(this);
    this.moveToLine3 = this.moveToLine3.bind(this);
  }

  moveToLine1() {
    const [person, ...people] = this.state.people;
    const line1 = [...this.state.line1, person];
    if (person)
      this.setState({line1,people});
  }

  moveToLine2() {
    const [person, ...line1] = this.state.line1;
    const line2 = [...this.state.line2, person];
    if (person)
      this.setState({line2,line1});
  }

  moveToLine3() {
    const [person, ...line2] = this.state.line2;
    const line3 = [...this.state.line3, person];
    if (person)
      this.setState({line3,line2});
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <Line people={this.state.people}/>
            </div>
            <div className="col-xs-3">
              <Line movePerson={this.moveToLine1} people={this.state.line1} order={[4,3,1,2]}/>
            </div>
            <div className="col-xs-3">
              <Line movePerson={this.moveToLine2} people={this.state.line2} order={[2,4,1,3]}/>
            </div>
            <div className="col-xs-3">
              <Line movePerson={this.moveToLine3} people={this.state.line3} order={[2,1,4,3]}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App