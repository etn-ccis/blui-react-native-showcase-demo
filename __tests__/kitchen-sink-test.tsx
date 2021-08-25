import 'react-native';
import React from 'react';
import { KitchenSink } from '../components/kitchen-sink';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
jest.useFakeTimers();

describe('Kitchen sink snapshot', () => {
    test('Renders correctly and snapShot matches', ()=>{
    const snap = renderer.create(
        <SafeAreaProvider>
            <KitchenSink />
        </SafeAreaProvider>
    ).toJSON();
    expect(snap).toMatchSnapshot();
})
});
