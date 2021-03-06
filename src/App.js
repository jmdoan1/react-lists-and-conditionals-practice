import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {
  state = {
    input: ''
  }
  
  updateInput = (event) => {
    this.setState({
      input: event.target.value
    })
  };

  charClickHandler = (ind) => {
    const arr = this.state.input.split('');
    arr.splice(ind, 1);
    this.setState({input: arr.join('')});
  }

  render() {

    let charComponents =  (
      this.state.input.split('').map((char, index) => {
        return <CharComponent 
            character={char}
            clicked={() => this.charClickHandler(index)}
            key={index}
          />
      })
    );

    return (
      <div className="App">
        <h1>INSTRUCTIONS</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <div>
          <h1>CONTENT</h1>
          <input type="text" onChange={this.updateInput} value={this.state.input}/>
          <p>Length: {this.state.input.length}</p>
          <ValidationComponent length={this.state.input.length} />
          {charComponents}
        </div>
      </div>
    );
  }
}

export default App;
