import { InfoListItemProps, UserMenu, wrapIcon } from '@pxblue/react-native-components';
import React from 'react';
import { Avatar, useTheme } from 'react-native-paper';
import * as Colors from '@pxblue/colors';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { blueDarkAlt } from '@pxblue/react-native-themes';
const SwapIcon = wrapIcon({ IconClass: MatIcon, name: 'swap-horiz', flip: false });
const InvertColorsIcon = wrapIcon({ IconClass: MatIcon, name: 'invert-colors', flip: false });
const CancelIcon = wrapIcon({ IconClass: MatIcon, name: 'cancel', flip: false });

type UserMenuExampleProps = {
    onToggleRTL: () => void;
    onToggleTheme: () => void;
};

export const UserMenuExample: React.FC<UserMenuExampleProps> = (props) => {
    const theme = useTheme();
    const { onToggleRTL, onToggleTheme } = props;

    const menuItems: InfoListItemProps[] = [
        { title: 'Toggle RTL', IconClass: SwapIcon, onPress: (): void => onToggleRTL() },
        { title: 'Toggle Theme', IconClass: InvertColorsIcon, onPress: (): void => onToggleTheme() },
        { title: 'Cancel', IconClass: CancelIcon },
    ];

    return (
        <UserMenu
            menuTitle={'John Smith'}
            menuSubtitle={'Account Manager'}
            menuItems={menuItems}
            avatar={
                <Avatar.Icon
                    icon="account-circle"
                    size={40}
                    color={Colors.white[500]}
                    theme={theme.dark ? blueDarkAlt : {}}
                />
            }
        />
    );
};
