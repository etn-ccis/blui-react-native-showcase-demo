import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { Snackbar, useTheme } from 'react-native-paper';

export const ThemedSnackbar: typeof Snackbar = (props) => {
    const theme = useTheme(props.theme);

    return <Snackbar {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
