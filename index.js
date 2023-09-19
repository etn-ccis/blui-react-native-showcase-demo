import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import { MD3BluiLightTheme } from './md3-themes';

export default function Main() {
    return (
        <PaperProvider theme={MD3BluiLightTheme}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
