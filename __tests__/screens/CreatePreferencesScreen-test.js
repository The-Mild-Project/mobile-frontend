import * as React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import renderer from 'react-test-renderer';

import CreatePreferencesScreen from '../../screens/CreatePreferenceScreen';

jest.mock('expo', () => ({
    AppLoading: 'AppLoading',
}));

describe('App', () => {
    jest.useFakeTimers();

    beforeEach(() => {
        NavigationTestUtils.resetInternalState();
    });

    it(`renders the loading screen`, () => {
        const tree = renderer.create(<CreatePreferencesScreen />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
