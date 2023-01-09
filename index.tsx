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
import { FontScaleProvider } from '@brightlayer-ui/react-native-components';
import { ADJUSTS_FONT_SIZE_TO_FIT, DISABLE_FONT_SCALE, MAX_FONT_SCALE, MIN_FONT_SCALE } from './constants';

const wrapper = (): JSX.Element => {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <FontScaleProvider
                    disableScaling={DISABLE_FONT_SCALE}
                    adjustsFontSizeToFit={ADJUSTS_FONT_SIZE_TO_FIT}
                    maxScale={MAX_FONT_SCALE}
                    minScale={MIN_FONT_SCALE}
                >
                    <MainRouter />
                </FontScaleProvider>
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

AppRegistry.registerComponent(appName, () => wrapper);
