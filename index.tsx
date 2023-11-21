import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { ThemeContext, ThemeType } from './contexts/ThemeContext';

export default function Main() {
    const [theme, setTheme] = React.useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <App />
            </PaperProvider>
        </ThemeContext.Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
