import 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserMenuExample } from '../components/user-menu-example';
import renderer from 'react-test-renderer';

describe('Kitchen sink snapshot', () => {
    test('Renders correctly and snapShot matches', ()=>{
    const snap = renderer.create(
        <SafeAreaProvider>
        <UserMenuExample />
        </SafeAreaProvider>
    ).toJSON();
    expect(snap).toMatchSnapshot();
})
});