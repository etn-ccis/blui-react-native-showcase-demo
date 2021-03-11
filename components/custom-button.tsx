import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { Button, useTheme } from 'react-native-paper';

export const MyCustomButton: typeof Button = (props) => {
    const theme = useTheme();
    return (
        <Button
            {...props}
            theme={props.mode === 'contained' && theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}}
        />
    );
};
