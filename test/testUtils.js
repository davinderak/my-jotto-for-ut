import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../src/reducers';
import { middlewares } from '../src/configStore';

export const storeFactory = (initialState={}) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Returns node(s) with given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {String} val - Value of data-test attribute to look for
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined();
}