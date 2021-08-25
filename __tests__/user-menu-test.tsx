import 'react-native';
import React from 'react';
import { UserMenuExample } from '../components/user-menu-example';
import renderer from 'react-test-renderer';
jest.useFakeTimers();

describe('Kitchen sink snapshot', () => {
    test('Renders correctly and snapShot matches', ()=>{
    const snap = renderer.create(
            <UserMenuExample onToggleRTL={() => {}} onToggleTheme={() => {}} />
    ).toJSON();
    expect(snap).toMatchSnapshot();
})
});