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
import { blue, blueDark } from '@pxblue/react-native-themes';

const wrapper = (): JSX.Element => {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <MainRouter />
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

AppRegistry.registerComponent(appName, () => wrapper);
