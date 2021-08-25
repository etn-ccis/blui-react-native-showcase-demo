import 'react-native';
import React from 'react';
import { MobileStepperExample } from '../components/mobile-stepper-example';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { blue } from '@pxblue/react-native-themes';
import renderer from 'react-test-renderer';
jest.useFakeTimers();
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: (): { top: number; left: number; right: number; bottom: number } => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }),
}));

describe('Kitchen sink snapshot', () => {
    test('Renders correctly and snapShot matches', () => {
        const snap = renderer
            .create(
                <ThemeContext.Provider value={{ theme: 'light', setTheme: () => {} }}>
                    <PaperProvider theme={blue}>
                        <MobileStepperExample />
                    </PaperProvider>
                </ThemeContext.Provider>
            )
            .toJSON();
        expect(snap).toMatchSnapshot();
    });
});
