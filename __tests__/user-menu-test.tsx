import 'react-native';
import React from 'react';
import { UserMenuExample } from '../components/user-menu-example';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
jest.useFakeTimers();

describe('Kitchen sink snapshot', () => {
    test('Renders correctly and snapShot matches', ()=>{
    const snap = renderer.create(
        <SafeAreaProvider>
            <UserMenuExample onToggleRTL={() => {}} onToggleTheme={() => {}} />
        </SafeAreaProvider>
    ).toJSON();
    expect(snap).toMatchSnapshot();
})
});