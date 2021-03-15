import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';

export const MyCustomTextInput: typeof TextInput = (props) => {
    const theme = useTheme(props.theme);
    const darkTheme = JSON.parse(JSON.stringify(blueDarkAlt));
    darkTheme.colors.primary = theme.colors.primary;

    return <TextInput {...props} theme={theme.dark ? Object.assign({}, darkTheme, props.theme) : {}} />;
};
