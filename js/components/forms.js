import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    let userInput = parseInt(this.textInput.value);
    if (userInput >= 0 && userInput < 100) {
      this.props.onSubmit(this.textInput.value);
    }
  }

  

  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          ref={input => this.textInput = input}
        />
        <button
          type="button"
          className="submit"
          onClick={this.onSubmit}
        >
          Guess
        </button>
      </div>
    );
  }
}