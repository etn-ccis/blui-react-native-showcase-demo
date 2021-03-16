import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { Badge, useTheme } from 'react-native-paper';

export const MyCustomBadge: typeof Badge = (props) => {
    const theme = useTheme(props.theme);

    return (
        <Badge {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}}>
            {props.children}
        </Badge>
    );
};
