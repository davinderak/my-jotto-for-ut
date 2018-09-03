import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    if (props.success) {
        return (
            <div data-test="comp-congrats" className="alert alert-success">
                <span data-test="congrats-message">Congratulations!</span>
            </div>
        )
    } else {
        return (
            <div data-test="comp-congrats" />
        ) 
    }   
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
};

export default Congrats;