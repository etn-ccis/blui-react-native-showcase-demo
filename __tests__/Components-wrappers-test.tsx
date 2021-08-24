import 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as components from '../components/wrappers/index';
import renderer from 'react-test-renderer';
jest.useFakeTimers();

Object.keys(components).forEach((componentName) => {
    //@ts-ignore
    const Component = components[componentName];
    console.log(Component)
    describe(`Component: ${componentName}`, () => {
        test(`${componentName} renders examples correctly`, () => {
            const tree = renderer
                .create(
                        <Component />
                )
                .toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});