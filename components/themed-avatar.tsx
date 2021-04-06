import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { Avatar, useTheme } from 'react-native-paper';

export const ThemedIconAvatar: typeof Avatar.Icon = (props) => {
    const theme = useTheme(props.theme);

    return <Avatar.Icon {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};

export const ThemedImageAvatar: typeof Avatar.Image = (props) => {
    const theme = useTheme(props.theme);

    return <Avatar.Image {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};

export const ThemedTextAvatar: typeof Avatar.Text = (props) => {
    const theme = useTheme(props.theme);

    return <Avatar.Text {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
