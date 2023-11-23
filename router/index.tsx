import 'react-native-gesture-handler';
import React, { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { NavDrawerProps, NavigationDrawer } from './navigation-drawer';
import { App } from '../App';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native-paper';

const Drawer = createDrawerNavigator();

export type RootStackParamList = {
    App: undefined;
    NavigationDrawer: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const CustomDrawerContent = (props: any): any => (
    <View style={{ height: '100%' }}>
        <NavigationDrawer {...props} />
    </View>
);

export const MainRouter = (): any => (
    <NavigationContainer>
        <Drawer.Navigator
            initialRouteName="App"
            // drawerStyle={{ backgroundColor: 'transparent', width: '80%' }}
            // drawerContent={(props: any): ReactNode => <CustomDrawerContent {...props} />}
            // screenOptions={{
            //     headerShown: false,
            // }}
            drawerContent={(props): ReactNode => <CustomDrawerContent {...props} />}
        >
            <RootStack.Screen name="App" component={App} />
        </Drawer.Navigator>
    </NavigationContainer>
    // <View style={{ backgroundColor: 'white' }}>
    //     <Text>Test</Text>
    // </View>
);
