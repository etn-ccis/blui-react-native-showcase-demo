import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { TextInput, useTheme } from 'react-native-paper';

export const MyCustomTextInput: typeof TextInput = (props) => {
    const theme = useTheme(props.theme);
    return (
        <TextInput
            {...props}
            theme={
                theme.dark
                    ? Object.assign(
                          {},
                          JSON.parse(JSON.stringify(blueDarkAlt)),
                          JSON.parse(JSON.stringify({ colors: { primary: theme.colors.primary } })),
                          props.theme
                      )
                    : {}
            }
        />
    );
};
