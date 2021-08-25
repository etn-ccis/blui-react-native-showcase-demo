import 'react-native';
import React from 'react';
import { MobileStepperExample } from '../components/mobile-stepper-example';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
jest.useFakeTimers();

describe('Kitchen sink snapshot', () => {
    test('Renders correctly and snapShot matches', ()=>{
    const snap = renderer.create(
        <SafeAreaProvider>
            <SafeAreaView>
                <MobileStepperExample />
            </SafeAreaView>
        </SafeAreaProvider>
    ).toJSON();
    expect(snap).toMatchSnapshot();
})
});