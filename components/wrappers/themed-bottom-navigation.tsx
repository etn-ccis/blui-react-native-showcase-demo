import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { BottomNavigation, useTheme } from 'react-native-paper';

export const ThemedBottomNavigation: typeof BottomNavigation = (props) => {
    const theme = useTheme(props.theme);

    return <BottomNavigation {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
