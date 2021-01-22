import { InfoListItem, InfoListItemProps, UserMenu, wrapIcon } from '@pxblue/react-native-components';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import * as PXBColors from '@pxblue/colors';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
const VpnKeyIcon = wrapIcon({ IconClass: MatIcon, name: 'vpn-key', flip: false });
const SettingsIcon = wrapIcon({ IconClass: MatIcon, name: 'settings', flip: false });
const ExitToAppIcon = wrapIcon({ IconClass: MatIcon, name: 'exit-to-app', flip: false });
const avatarTestImage = require('../assets/images/test-avatar.png');

export const UserMenuExample: React.FC = () => {
    const [menuClose, setMenuClose] = useState(false);

    const closeMenu = (): void => {
        setMenuClose(true);
        setTimeout((): void => setMenuClose(false), 0);
    };

    const customMenu = (): JSX.Element => (
        <View>
            <InfoListItem title={'Custom Menu Title'} subtitle={'Custom Menu Subtitle'} />
            <Divider />
            <InfoListItem title={'Custom Menu Info List Item 1'} onPress={(): void => closeMenu()} />
            <InfoListItem title={'Custom Menu Info List Item 2'} onPress={(): void => closeMenu()} />
        </View>
    );

    const menuItems: InfoListItemProps[] = [
        { title: 'Change Password', IconClass: VpnKeyIcon },
        { title: 'Preferences', IconClass: SettingsIcon },
        { title: 'Log Out', IconClass: ExitToAppIcon },
    ];

    return (
        <>
            <Card style={{ padding: 0, margin: 10, marginBottom: 0 }}>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}
                >
                    <UserMenu
                        avatarIcon={'account-circle'}
                        avatarType={'icon'}
                        avatarColor={PXBColors.white[50]}
                        avatarSize={56}
                        avatarBackgroundColor={PXBColors.red[500]}
                        menu={customMenu()}
                        menuClose={menuClose}
                    />
                    <UserMenu
                        avatarImage={avatarTestImage}
                        avatarType={'image'}
                        avatarSize={56}
                        avatarBackgroundColor={PXBColors.green[500]}
                        menuTitle={'John Doe'}
                        menuSubtitle={'j.doe@example.com'}
                        menuItems={menuItems}
                    />
                    <UserMenu
                        avatarText={'PX'}
                        avatarType={'text'}
                        avatarColor={PXBColors.white[50]}
                        avatarSize={56}
                        avatarBackgroundColor={PXBColors.black[500]}
                        menuTitle={'John Doe'}
                        menuSubtitle={'j.doe@example.com'}
                        menuItems={menuItems}
                    />
                </View>
            </Card>
            <Card style={{ padding: 0, margin: 10, marginBottom: 0 }}>
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}
                >
                    <UserMenu
                        avatarIcon={'account-circle'}
                        avatarType={'icon'}
                        avatarColor={PXBColors.white[50]}
                        menu={customMenu()}
                        menuClose={menuClose}
                    />
                    <UserMenu
                        avatarImage={avatarTestImage}
                        avatarType={'image'}
                        menuTitle={'John Doe'}
                        menuSubtitle={'j.doe@example.com'}
                        menuItems={menuItems}
                    />
                    <UserMenu
                        avatarText={'PX'}
                        avatarType={'text'}
                        avatarColor={PXBColors.white[50]}
                        menuTitle={'John Doe'}
                        menuSubtitle={'j.doe@example.com'}
                        menuItems={menuItems}
                    />
                </View>
            </Card>
        </>
    );
};
