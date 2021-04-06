import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { Button, useTheme } from 'react-native-paper';

export const ThemedButton: typeof Button = (props) => {
    const theme = useTheme(props.theme);
    return (
        <Button
            {...props}
            theme={props.mode === 'contained' && theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}}
        />
    );
};
