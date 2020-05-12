import * as React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import HomeScreen from '../../screens/HomeScreen';

jest.mock('expo', () => ({
    AppLoading: 'AppLoading',
}));

describe('App', () => {
    jest.useFakeTimers();

    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it(`renders the loading screen`, () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
