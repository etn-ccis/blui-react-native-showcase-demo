import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import _clonedeep from 'lodash.clonedeep';

export const MyCustomTextInput: typeof TextInput = (props) => {
    const theme = useTheme(props.theme);
    // Merging blueDark colors.primary with blueDarkAlt theme so TextInput border is blueDark.colors.primary
    const darkTheme = _clonedeep(blueDarkAlt);
    darkTheme.colors.primary = theme.colors.primary;

    return <TextInput {...props} theme={theme.dark ? Object.assign({}, darkTheme, props.theme) : {}} />;
};
