/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { MainRouter } from './router';
import { Provider as PaperProvider } from 'react-native-paper';
import React, { useState } from 'react';
import { ThemeContext, ThemeType } from './contexts/ThemeContext';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { FontScaleContext } from '@brightlayer-ui/react-native-components';
import { DISABLE_FONT_SCALE, MAX_FONT_SCALE, MIN_FONT_SCALE } from './constants';

const wrapper = (): JSX.Element => {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <FontScaleContext.Provider
                    value={{ maxScale: MAX_FONT_SCALE, minScale: MIN_FONT_SCALE, disableScaling: DISABLE_FONT_SCALE }}
                >
                    <MainRouter />
                </FontScaleContext.Provider>
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

AppRegistry.registerComponent(appName, () => wrapper);
