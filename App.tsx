/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import type { PropsWithChildren } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    I18nManager,
    SafeAreaView,
    ScrollView,
    StatusBar,
    /*StyleSheet, Text,*/ useColorScheme,
    View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { KitchenSink } from './components/KitchenSink';
import { CollapsibleHeaderLayout, Header } from '@brightlayer-ui/react-native-components';
import { UserMenuExample } from './components/UserMenuExample';
import { useThemeContext } from './contexts/ThemeContext';
import RNRestart from 'react-native-restart';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './router';
import { DrawerActions } from '@react-navigation/native';
import { Text } from 'react-native-paper';

/*type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}
            >
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}
            >
                {children}
            </Text>
        </View>
    );
}*/

export const toggleRTL = (): void => {
    if (I18nManager.isRTL) {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
    } else {
        I18nManager.forceRTL(true);
    }
    RNRestart.Restart();
};

type AppProps = {
    navigation: StackNavigationProp<RootStackParamList, 'App'>;
};

export const App: React.FC<AppProps> = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const { theme: themeType, setTheme } = useThemeContext();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
                    <View
                        style={{
                            backgroundColor: isDarkMode ? Colors.black : Colors.white,
                        }}
                    ></View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

/*const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});*/
