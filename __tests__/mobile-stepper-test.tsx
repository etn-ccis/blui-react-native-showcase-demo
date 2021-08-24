import 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MobileStepperExample } from '../components/mobile-stepper-example';
import renderer from 'react-test-renderer';

describe('Kitchen sink snapshot', () => {
    test('Renders correctly and snapShot matches', ()=>{
    const snap = renderer.create(
        <SafeAreaProvider>
        <MobileStepperExample />
        </SafeAreaProvider>
    ).toJSON();
    expect(snap).toMatchSnapshot();
})
});