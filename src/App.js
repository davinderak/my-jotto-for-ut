import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuessedWord from './GuessedWord';
import Congrats from './Congrats';
import { getSecretWord, resetGame } from './actions';
import Input from './Input';
import NewWordButton from './NewWordButton';
import GiveUp from './GiveUp';
export class UnconnectedApp extends Component {

  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container" data-test="app-component">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />

        <GiveUp 
          display={this.props.giveUp} 
          secretWord={this.props.secretWord} />

        <NewWordButton 
          display={this.props.success || this.props.giveUp} 
          resetAction={this.props.resetGame} />
        
        <Input />
        
        <GuessedWord guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, secretWord, guessedWords, giveUp } = state;
  return {
    success, secretWord, guessedWords, giveUp
  }
}

const actions = {
  getSecretWord,
  resetGame
}
export default connect(mapStateToProps, actions)(UnconnectedApp);

