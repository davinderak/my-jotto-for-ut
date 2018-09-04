import React from 'react';
import PropTypes from 'prop-types';

const GiveUp = props => {
    if (props.display) {
        return (
            <div data-test="component-secret-word-reveal" className="alert alert-danger">
                <span data-test="reveal-message">
                The secret word was "{props.secretWord}"<br />
                Better luck next time!
                </span>
            </div>
        )
    }
    return (
        <div data-test="component-secret-word-reveal" />
    );
};

GiveUp.propTypes = {
    display: PropTypes.bool,
    secretWord: PropTypes.string,
};

export default GiveUp;