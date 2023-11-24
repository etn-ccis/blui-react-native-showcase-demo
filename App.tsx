/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
import { CollapsibleHeaderLayout } from '@brightlayer-ui/react-native-components';
import { UserMenuExample } from './components/UserMenuExample';
import { useThemeContext } from './contexts/ThemeContext';
import RNRestart from 'react-native-restart';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './router';

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
                    >
                        <CollapsibleHeaderLayout
                            HeaderProps={{
                                variant: 'dynamic',
                                title: 'Valley Forge',
                                subtitle: 'The Last Stand',
                                icon: { name: 'menu' },
                                info: 'hello',
                                expandable: true,
                                backgroundImage: require('./assets/images/farm.jpg'),
                                onIconPress: (): void => {
                                    navigation.openDrawer();
                                },
                                actionItems: [
                                    {
                                        icon: { name: 'more' },
                                        onPress: () => {},
                                        component: (
                                            <UserMenuExample
                                                onToggleRTL={toggleRTL}
                                                onToggleTheme={(): void =>
                                                    setTheme(themeType === 'light' ? 'dark' : 'light')
                                                }
                                            />
                                        ),
                                    },
                                ],
                            }}
                        >
                            <KitchenSink />
                        </CollapsibleHeaderLayout>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};
