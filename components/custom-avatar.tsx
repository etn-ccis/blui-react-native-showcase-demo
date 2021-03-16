import { blueDarkAlt } from '@pxblue/react-native-themes';
import React from 'react';
import { Avatar, useTheme } from 'react-native-paper';

export const MyCustomIconAvatar: typeof Avatar.Icon = (props) => {
    const theme = useTheme(props.theme);

    return <Avatar.Icon {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};

export const MyCustomImageAvatar: typeof Avatar.Image = (props) => {
    const theme = useTheme(props.theme);

    return <Avatar.Image {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};

export const MyCustomTextAvatar: typeof Avatar.Text = (props) => {
    const theme = useTheme(props.theme);

    return <Avatar.Text {...props} theme={theme.dark ? Object.assign({}, blueDarkAlt, props.theme) : {}} />;
};
