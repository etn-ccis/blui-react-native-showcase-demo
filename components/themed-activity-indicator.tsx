import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { ActivityIndicator, useTheme } from 'react-native-paper';

export const ThemedActivityIndicator: typeof ActivityIndicator = (props) => {
    const theme = useTheme(props.theme);

    return <ActivityIndicator {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
