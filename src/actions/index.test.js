import moxios from 'moxios';

import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install()
    });
    afterEach(() => {
        moxios.uninstall()
    });

    test('add response word to the state', () => {
        const secretWord = 'Party';
        const store = storeFactory();
        moxios.wait(() => {
            let request = moxios.requests.mostRecent('http://localhost:3000/');
            request.respondWith({
                status: 200,
                response: secretWord
            });
        });
        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState();
                expect(newState.secretWord).toBe(secretWord);
            });
    });
});