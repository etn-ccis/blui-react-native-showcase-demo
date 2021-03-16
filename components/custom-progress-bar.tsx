import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { ProgressBar, useTheme } from 'react-native-paper';

export const MyCustomProgressBar: typeof ProgressBar = (props) => {
    const theme = useTheme(props.theme);
    return <ProgressBar {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
