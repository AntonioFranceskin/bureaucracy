import React from 'react';

class Line extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lastNumber: 0
    }
    this.onNumberClicked = this.onNumberClicked.bind(this);
  }

  onNumberClicked(e) {
    const number = e.target.innerText;
    let {lastNumber} = this.state;
    if (lastNumber == 3 & number == 4) {
      this.setState({
        lastNumber: 0
      })
      this.props.movePerson();
    } else if (lastNumber + 1 == parseInt(number)) {
      lastNumber += 1;
      this.setState({lastNumber});
    } else
      this.setState({
        lastNumber: 0
      });
  }

  showButtons() {
    if(!this.props.movePerson)
      return "";
    return (
    <div className={`col-xs-12`}>
      {this.props.order.map((num, index)=> (
        <button className={`btn btn-default ${this.state.lastNumber >= num ? 'btn-success active' : ''}`} key={index} onClick={this.onNumberClicked}>{num}</button>)
      )}
    </div>
    )
  }
  render() {
    return (
      <div>
        {this.showButtons()}
        <div className="row">
          <div className="well text-center">
            {this.props.people.map((person, index) => <h3 key={index}>{person}</h3>)}
          </div>
        </div>
      </div>
    )
  }
}

export default Line;