import React from 'react';
import PropTypes from 'prop-types';

const GuessedWord = (props={}) => {
    let contents;
    let count = 'Total Guesses';
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Guess the secret word!
            </span>
        )
    } else {
        const guessedWordsRow = props.guessedWords.map((word, i) => (
            <tr data-test="guessed-word" key={word.guessedWord}>
                <td data-test="guessed-word-index">{i + 1}</td>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
                <table className="table table-sm">
                    <tbody className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Guessed Word</th>
                            <th>Letter Match Number</th>
                        </tr>
                        {guessedWordsRow}
                    </tbody>
                </table>
                {count + ' ' + props.guessedWords.length} 
            </div>
        )
    }
    return (
        <div data-test="comp-guessed-words">
            { contents }
        </div>
    )
}

GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default GuessedWord;