import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import * as Colors from '@pxblue/colors';

export const MyCustomTextInput: typeof TextInput = (props) => {
    const theme = useTheme();
    // @TODO: FIx this?! There has to be a better way to handle this. The blueDarkAlt theme seems to be overwritten when I try to modify this via the Object.assign method below
    // this is also altering the original blueDarkObject instead of making a copy so everything after this is rendered will also have this messy mutated theme.
    const altTheme = Object.assign({}, blueDarkAlt);
    altTheme.colors.primary = theme.colors.primary;
    altTheme.colors.background = Colors.black[900];

    return <TextInput {...props} theme={theme.dark ? Object.assign({}, altTheme, props.theme) : {}} />;
};
