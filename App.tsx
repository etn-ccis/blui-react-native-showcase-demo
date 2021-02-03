import React from 'react';
import { SafeAreaView, ScrollView, View, I18nManager } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RNRestart from 'react-native-restart';
import {
    ChannelValue,
    EmptyState,
    Header,
    Hero,
    HeroBanner,
    InfoListItem,
    ListItemTag,
    ScoreCard,
    wrapIcon,
} from '@pxblue/react-native-components';
import { Card, Button, useTheme } from 'react-native-paper';

import MatIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as PXBColors from '@pxblue/colors';

import _A from '@pxblue/icons-svg/grade_a.svg';
import _Temp from '@pxblue/icons-svg/temp.svg';
import _Humidity from '@pxblue/icons-svg/moisture.svg';
import _Battery from '@pxblue/icons-svg/battery.svg';
import { RootStackParamList } from './router';
import { MobileStepperExample } from './components/mobile-stepper-example';
import { useThemeContext } from './contexts/ThemeContext';
import { UserMenuExample } from './components/user-menu-example';
import { KitchenSink } from './components/kitchen-sink';

const backgroundImage = require('./assets/images/farm.jpg');

const Sunny = wrapIcon({ IconClass: MatIcon, name: 'wb-sunny', flip: false });

const Notifications = wrapIcon({ IconClass: MatIcon, name: 'notifications', flip: false });

const Info = wrapIcon({ IconClass: MatIcon, name: 'info', flip: false });

const Clouds = wrapIcon({ IconClass: MatIcon, name: 'cloud', flip: false });
const ChartLineVariant = wrapIcon({
    IconClass: MaterialCommunityIcon,
    name: 'chart-line-variant',
    flip: false,
});
const Battery = wrapIcon({ IconClass: _Battery, flip: I18nManager.isRTL });
const A = wrapIcon({ IconClass: _A, flip: false });
const Temp = wrapIcon({ IconClass: _Temp, flip: false });
const Humidity = wrapIcon({ IconClass: _Humidity, flip: false });
const Pie = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'chart-pie', flip: false });
const Clock = wrapIcon({ IconClass: MaterialCommunityIcon, name: 'clock-outline', flip: false });
const MailIcon = wrapIcon({ IconClass: MatIcon, name: 'mail', flip: false });
const MenuIcon = wrapIcon({ IconClass: MatIcon, name: 'menu', flip: I18nManager.isRTL });
const MoreIcon = wrapIcon({ IconClass: MatIcon, name: 'more-vert', flip: false });

const PADDING = 10;

export const toggleRTL = (): void => {
    if (I18nManager.isRTL) {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
    } else {
        I18nManager.forceRTL(true);
    }
    RNRestart.Restart();
};

type AppProps = {
    navigation: StackNavigationProp<RootStackParamList, 'App'>;
};

export const App: React.FC<AppProps> = ({ navigation }) => {
    const theme = useTheme();
    const { theme: themeType, setTheme } = useThemeContext();

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Header
                expandable={true}
                title={'South Tin Mill'}
                subtitle={'Gary Steel Works'}
                info={'Online'}
                navigation={{
                    icon: MenuIcon,
                    onPress: (): void => {
                        navigation.openDrawer();
                    },
                }}
                actionItems={[
                    {
                        component: (
                            <UserMenuExample
                                onToggleRTL={toggleRTL}
                                onToggleTheme={(): void => setTheme(themeType === 'light' ? 'dark' : 'light')}
                            />
                        ),
                    },
                ]}
                backgroundImage={backgroundImage}
                searchableConfig={{ placeholder: 'Search', autoFocus: true }}
            />
            <ScrollView>
                <Card style={{ padding: 0, margin: PADDING, marginBottom: 0 }}>
                    <EmptyState
                        title={'Nothing Found'}
                        description={'Not a single thing'}
                        IconClass={ChartLineVariant}
                        actions={
                            <Button mode={'outlined'} labelStyle={{ color: PXBColors.blue[500] }}>
                                Add a Device
                            </Button>
                        }
                    />
                </Card>
                <Card style={{ padding: 0, margin: PADDING, marginBottom: PADDING }}>
                    <HeroBanner>
                        <Hero
                            label={'Healthy'}
                            value={96}
                            units={'/100'}
                            IconClass={A}
                            fontSize={20}
                            iconColor={PXBColors.green[500]}
                        />
                        <Hero label={'Battery'} value={'Full'} IconClass={Battery} iconColor={PXBColors.blue[500]} />
                        <Hero label={'Estimated'} IconClass={Clock} iconColor={PXBColors.gray[500]}>
                            <ChannelValue fontSize={20} value={1} units={'h'} />
                            <ChannelValue fontSize={20} value={37} units={'m'} />
                        </Hero>
                        <Hero label={'Loaded'} IconClass={Pie} iconColor={PXBColors.blue[500]}>
                            <ChannelValue fontSize={20} value={65} units={'%'} IconClass={ChartLineVariant} />
                        </Hero>
                        <Hero
                            label={'Not Shown'}
                            value={'5th Item'}
                            IconClass={Battery}
                            iconColor={PXBColors.blue[500]}
                        />
                    </HeroBanner>
                    <InfoListItem
                        divider={'full'}
                        IconClass={Sunny}
                        title={'Temperature'}
                        rightComponent={<ChannelValue value={68} units={'°F'} />}
                    />
                    <InfoListItem
                        divider={'full'}
                        IconClass={Sunny}
                        title={'Temperature'}
                        rightComponent={<ChannelValue value={68} units={'°F'} />}
                    />
                    <InfoListItem
                        divider={'full'}
                        IconClass={Sunny}
                        title={'Temperature'}
                        rightComponent={
                            <React.Fragment>
                                <ChannelValue value={1} units={'h'} IconClass={Clock} />
                                <ChannelValue value={24} units={'m'} />
                            </React.Fragment>
                        }
                    />
                </Card>
                <InfoListItem
                    title={'Emerson Field West'}
                    subtitle={['DG 100', 'EDR 5000', 'Online']}
                    statusColor={PXBColors.red[500]}
                    fontColor={PXBColors.red[500]}
                    hidePadding={true}
                    backgroundColor={theme.dark ? PXBColors.darkBlack[100] : 'white'}
                    IconClass={Battery}
                    avatar
                    // dense
                    rightComponent={<MatIcon name={'mail'} size={24} color={PXBColors.black[500]} />}
                    divider={'partial'}
                    onPress={(): void => {
                        /* do nothing */
                    }}
                />
                <InfoListItem
                    title={'South Hills Farm'}
                    subtitle={'Offline'}
                    backgroundColor={theme.dark ? PXBColors.darkBlack[100] : 'white'}
                    statusColor={PXBColors.orange[500]}
                    divider={'full'}
                    IconClass={Pie}
                    iconAlign={'center'}
                    hidePadding={false}
                    fontColor={PXBColors.red[500]}
                    rightComponent={<ChannelValue value={15} units={'A'} color={theme.colors.text} />}
                    onPress={(): void => {
                        /* do nothing */
                    }}
                />
                <InfoListItem
                    title={'Cherry East'}
                    backgroundColor={theme.dark ? PXBColors.darkBlack[100] : 'white'}
                    subtitle={['DG 100', 'EDR 5000', 'Online']}
                    subtitleSeparator={'/'}
                    hidePadding
                    rightComponent={<ListItemTag label={'ACTIVE'} />}
                    onPress={(): void => {
                        /* do nothing */
                    }}
                />
                <ScoreCard
                    style={{ margin: PADDING }}
                    headerTitle={'Portland Datacenter Long Name'}
                    headerSubtitle={'6 UPS Devices'}
                    headerInfo={'Attention Required'}
                    headerBackgroundImage={backgroundImage}
                    actionItems={[
                        {
                            icon: MoreIcon,
                            onPress: (): void => {
                                /* do nothing */
                            },
                        },
                    ]}
                    badgeOffset={-55}
                    badge={
                        <HeroBanner style={{ flex: 0, minWidth: 80, justifyContent: 'flex-end' }}>
                            <Hero
                                label={'Score'}
                                iconSize={48}
                                iconColor={PXBColors.green[500]}
                                value={98}
                                units={'/100'}
                                IconClass={A}
                            />
                        </HeroBanner>
                    }
                    actionRow={
                        <InfoListItem
                            dense
                            chevron
                            hidePadding
                            title={'View Location'}
                            onPress={(): void => {
                                /* do nothing */
                            }}
                        />
                    }
                >
                    <View style={{ justifyContent: 'center', marginLeft: -16 }}>
                        <InfoListItem
                            dense
                            IconClass={Notifications}
                            iconColor={PXBColors.red[500]}
                            title={'1 Alarm'}
                        />
                        <InfoListItem dense IconClass={Info} iconColor={PXBColors.blue[500]} title={'1 Event'} />
                        <InfoListItem dense IconClass={Clouds} title={'Online'} />
                    </View>
                </ScoreCard>
                <ScoreCard
                    style={{ margin: PADDING, marginTop: 0 }}
                    headerColor={PXBColors.red[500]}
                    headerTitle={'Substation 3'}
                    headerSubtitle={'High Humidity Alarm'}
                    headerInfo={'5 Devices'}
                    headerBackgroundImage={backgroundImage}
                    actionItems={[
                        {
                            icon: MailIcon,
                            onPress: (): void => {
                                /* do nothing */
                            },
                        },
                        {
                            icon: MoreIcon,
                            onPress: (): void => {
                                /* do nothing */
                            },
                        },
                    ]}
                    badge={
                        <HeroBanner style={{ flex: 0, minWidth: 180, justifyContent: 'flex-end' }}>
                            <Hero
                                label={'Temperature'}
                                iconColor={PXBColors.black[500]}
                                iconSize={70}
                                value={69}
                                units={'°F'}
                                IconClass={Temp}
                            />
                            <Hero
                                label={'Humidity'}
                                iconSize={70}
                                iconColor={PXBColors.blue[200]}
                                value={78}
                                units={'%'}
                                IconClass={Humidity}
                            />
                        </HeroBanner>
                    }
                    actionRow={
                        <InfoListItem
                            dense
                            chevron
                            hidePadding
                            title={'View Location'}
                            onPress={(): void => {
                                /* do nothing */
                            }}
                        />
                    }
                >
                    <View style={{ justifyContent: 'center', marginLeft: -16 }}>
                        <InfoListItem
                            dense
                            IconClass={Notifications}
                            iconColor={PXBColors.red[500]}
                            title={'1 Alarm'}
                        />
                        <InfoListItem dense IconClass={Info} iconColor={PXBColors.blue[500]} title={'1 Event'} />
                        <InfoListItem dense IconClass={Clouds} title={'Online'} />
                    </View>
                </ScoreCard>

                <MobileStepperExample />

                <KitchenSink />

                <SafeAreaView />
            </ScrollView>
        </View>
    );
};
