import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { FAB, useTheme } from 'react-native-paper';

export const ThemedFAB: typeof FAB = (props) => {
    const theme = useTheme(props.theme);
    return <FAB {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
