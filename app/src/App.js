import Card from './components/Card';
import Form from './components/Form';
import ThankYou from './components/ThankYou';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: 'Jane Appleseed',
      cardNum: '0000 0000 0000 0000',
      month: '00',
      year: '00',
      cvc: '000',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    const id = e.target.id;
    const value = e.target.value
    switch(id) {
      case "card-name":
        this.setState({
          cardName: value
        })
        break;
      case "card-num":
        this.setState({
          cardNum: value
        })
        break;
      case "month":
        this.setState({
          month: value
        })
        break;
      case "year":
        this.setState({
          year: value
        })
        break;
      case "cvc":
        this.setState({
          cvc: value
        })
        break;
    }
  }
  showOnlyNumWarning(id, key) {
    if (id !== 'card-name' && /[a-z]/i.test(key)) {
      document.getElementById(id).innerHTML += `
        <div class="warning-text"></div>
      `;
    }
  }
  handleClick(e) {
    e.preventDefault();
    const numberInputs = [(this.state.cardNum).replace(/\s/g, ''), this.state.month, this.state.year, this.state.cvc];
    if (numberInputs.every(input => Number(input))) {
      this.setState({
        submitted: true
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Card 
          cardName={this.state.cardName}
          cardNum={this.state.cardNum}
          month={this.state.month}
          year={this.state.year}
          cvc={this.state.cvc}
        />
        {
        !this.state.submitted  &&
        <Form 
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          cardName={this.state.cardName}
          cardNum={this.state.cardNum}
          month={this.state.month}
          year={this.state.year}
          cvc={this.state.cvc}
        />
        }
        {this.state.submitted && <ThankYou />}
      </div>
    );
  }
}

export default App;