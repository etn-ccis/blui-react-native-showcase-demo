import * as React from 'react';
import { AppRegistry, Appearance } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import {blue, blueDark} from '@brightlayer-ui/react-native-themes'
export default function Main() {
    const colorScheme = Appearance.getColorScheme();
    return (
        <PaperProvider theme={colorScheme === 'dark'? blueDark:blue}>
            <App />
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
