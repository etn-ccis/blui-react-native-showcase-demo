import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { Appbar, useTheme } from 'react-native-paper';

export const MyCustomAppbar: typeof Appbar = (props) => {
    const theme = useTheme(props.theme);

    return <Appbar {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
