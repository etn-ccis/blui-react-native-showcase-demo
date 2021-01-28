import { InfoListItemProps, UserMenu, wrapIcon } from '@pxblue/react-native-components';
import React from 'react';
import { Image, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import * as Colors from '@pxblue/colors';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
const VpnKeyIcon = wrapIcon({ IconClass: MatIcon, name: 'vpn-key', flip: false });
const SettingsIcon = wrapIcon({ IconClass: MatIcon, name: 'settings', flip: false });
const ExitToAppIcon = wrapIcon({ IconClass: MatIcon, name: 'exit-to-app', flip: false });
const avatarTestImage = require('../assets/images/test-avatar.png');

export const UserMenuExample: React.FC = () => {
    const menuItems: InfoListItemProps[] = [
        { title: 'Change Password', IconClass: VpnKeyIcon },
        { title: 'Preferences', IconClass: SettingsIcon },
        { title: 'Log Out', IconClass: ExitToAppIcon },
    ];

    return (
        <Card style={{ padding: 0, margin: 10, marginBottom: 5 }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginHorizontal: 24,
                    marginVertical: 24,
                }}
            >
                <UserMenu
                    menuTitle={'John Smith'}
                    menuSubtitle={'j.smith@example.com'}
                    menuItems={menuItems}
                    avatar={
                        <Avatar.Icon
                            icon="account-circle"
                            size={40}
                            color={Colors.white[50]}
                            style={{ backgroundColor: Colors.red[500] }}
                        />
                    }
                />
                <UserMenu
                    menuTitle={'John Smith'}
                    menuSubtitle={'j.smith@example.com'}
                    menuItems={menuItems}
                    avatar={
                        <Image
                            source={avatarTestImage}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 40,
                                resizeMode: 'contain',
                                backgroundColor: Colors.green[500],
                            }}
                        />
                    }
                />
                <UserMenu
                    menuTitle={'John Smith'}
                    menuSubtitle={'j.smith@example.com'}
                    backgroundColor={Colors.blue[500]}
                    fontColor={Colors.white[50]}
                    iconColor={Colors.white[50]}
                    menuItems={menuItems}
                    avatar={<Avatar.Text label={'PX'} size={40} color={Colors.white[50]} />}
                />
            </View>
        </Card>
    );
};
