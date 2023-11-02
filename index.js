import * as React from 'react';
import { AppRegistry, Appearance } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import { MD3BluiDarkTheme, MD3BluiLightTheme } from './md3-themes';

export default function Main() {
    const colorScheme = Appearance.getColorScheme();
    return (
        <PaperProvider theme={colorScheme === 'dark'? MD3BluiDarkTheme : MD3BluiLightTheme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
