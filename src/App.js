import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuessedWord from './GuessedWord';
import Congrats from './Congrats';
import { getSecretWord } from './actions';
import Input from './Input';

export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container" data-test="app-component">
        <h1>Jotto by Davinder</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWord guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, secretWord, guessedWords } = state;
  return {
    success, secretWord, guessedWords
  }
}
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);

