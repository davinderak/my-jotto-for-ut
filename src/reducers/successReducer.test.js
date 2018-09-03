import { actionTypes } from '../actions';
import successReducer from './successReducer';

describe('Success Reducers', () => {
    test('retunrs default state of `false` when no action is passed', () => {
        const newState = successReducer();
        expect(newState).toBe(false);
    });
    test('retunrs state of true upon receiveing the actions `CORRECT_GUESS`', () => {
        const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
        expect(newState).toBe(true);
    });
})