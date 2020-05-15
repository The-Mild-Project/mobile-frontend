import * as React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import LoginScreen from '../../screens/LoginScreen';

jest.mock('expo', () => ({
    AppLoading: 'AppLoading',
}));

describe('App', () => {
    jest.useFakeTimers();

    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it(`renders the loading screen`, () => {
        const tree = renderer.create(<LoginScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
