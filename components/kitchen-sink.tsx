/* eslint-disable no-console */
import { Body1, H5, Subtitle1 } from '@pxblue/react-native-components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    ActivityIndicator,
    Appbar,
    Avatar,
    Badge,
    Banner,
    BottomNavigation,
    Card,
    Checkbox,
    Chip,
    DataTable,
    Dialog,
    Divider,
    FAB,
    HelperText,
    IconButton,
    List,
    Menu,
    Modal,
    Paragraph,
    Portal,
    ProgressBar,
    RadioButton,
    Snackbar,
    Surface,
    Switch,
    Title,
    ToggleButton,
    useTheme,
} from 'react-native-paper';
import { MyCustomButton as Button } from './custom-button';
import { MyCustomTextInput as TextInput } from './custom-text-input';
import { blueDarkAlt } from '@pxblue/react-native-themes';
import Color from 'color';
import * as Colors from '@pxblue/colors';
const AvatarTestImage = require('../assets/images/test-avatar.png');

const MusicRoute = (): JSX.Element => <Subtitle1>Music</Subtitle1>;
const AlbumsRoute = (): JSX.Element => <Subtitle1>Albums</Subtitle1>;
const RecentsRoute = (): JSX.Element => <Subtitle1>Recents</Subtitle1>;

const styles = StyleSheet.create({
    card: {
        padding: 0,
        margin: 10,
        marginBottom: 5,
    },
    surface: {
        padding: 8,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const KitchenSink: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const [bannerVisible, setBannerVisible] = React.useState(true);
    const [checkboxOne, setCheckboxOne] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
    const [checkboxTwo, setCheckboxTwo] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('checked');
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [helperTextInputText, setHelperTextInputText] = React.useState('');
    const [accordionOneExpanded, setAccordionOneExpanded] = React.useState(false);
    const [accordionTwoExpanded, setAccordionTwoExpanded] = React.useState(false);
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [radioButtonValue, setRadioButtonValue] = React.useState('first');
    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [toggleButtonValue, setToggleButtonValue] = useState('left');
    const [nameInputText, setNameInputText] = React.useState('');
    const [emailInputText, setEmailInputText] = React.useState('');
    const [errorNameInputText, setErrorNameInputText] = React.useState('');
    const [errorEmailInputText, setErrorEmailInputText] = React.useState('');
    const [index, setIndex] = React.useState(0);

    const onChangeHelperTextInputText = (text: string): void => setHelperTextInputText(text);

    const helperTextInputHasErrors = (): boolean => !helperTextInputText.includes('@');

    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'music' },
        { key: 'albums', title: 'Albums', icon: 'album' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    return (
        <>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Activity Indicator</H5>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <ActivityIndicator animating={true} size={'small'} theme={theme.dark ? blueDarkAlt : {}} />
                        <ActivityIndicator animating={true} size={'large'} theme={theme.dark ? blueDarkAlt : {}} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Appbar</H5>
                    <View style={{ marginTop: 24 }}>
                        <Appbar theme={theme.dark ? blueDarkAlt : {}} style={{ marginBottom: 16 }}>
                            <Appbar.Header style={{ width: 350 }} theme={theme.dark ? blueDarkAlt : {}}>
                                <Appbar.Content title="Title" subtitle="Subtitle" />
                                <Appbar.Action icon="magnify" />
                                <Appbar.Action icon="dots-vertical" />
                            </Appbar.Header>
                        </Appbar>
                        <Appbar theme={theme.dark ? blueDarkAlt : {}}>
                            <Appbar.Header style={{ width: 350 }} theme={theme.dark ? blueDarkAlt : {}}>
                                <Appbar.BackAction />
                                <Appbar.Content title="Title" subtitle="Subtitle" />
                                <Appbar.Action icon="magnify" />
                                <Appbar.Action icon="dots-vertical" />
                            </Appbar.Header>
                        </Appbar>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Avatar</H5>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Avatar.Icon size={40} icon="account-circle" theme={theme.dark ? blueDarkAlt : {}} />
                        <Avatar.Image size={40} source={AvatarTestImage} theme={theme.dark ? blueDarkAlt : {}} />
                        <Avatar.Text size={40} label="PX" theme={theme.dark ? blueDarkAlt : {}} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Badge</H5>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Badge size={24} visible theme={theme.dark ? blueDarkAlt : {}}></Badge>
                        <Badge size={24} visible theme={theme.dark ? blueDarkAlt : {}}>
                            3
                        </Badge>
                        <Badge size={40} visible theme={theme.dark ? blueDarkAlt : {}}>
                            8
                        </Badge>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Banner</H5>
                    <View style={{ marginTop: 24 }}>
                        <Banner
                            visible={bannerVisible}
                            actions={[
                                {
                                    label: 'Fix it',
                                    onPress: (): void => setBannerVisible(false),
                                },
                                {
                                    label: 'Learn more',
                                    onPress: (): void => setBannerVisible(false),
                                },
                            ]}
                            icon="account-circle"
                        >
                            There was a problem processing a transaction on your credit card.
                        </Banner>
                        {!bannerVisible && (
                            <Button
                                mode={'contained'}
                                onPress={(): void => {
                                    setBannerVisible(true);
                                }}
                            >
                                Show Banner
                            </Button>
                        )}
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>BottomNavigation</H5>
                    <View style={{ marginTop: 24 }}>
                        <BottomNavigation
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            renderScene={renderScene}
                            theme={theme.dark ? blueDarkAlt : {}}
                        />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Button</H5>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <Button
                            icon="download"
                            mode="text"
                            onPress={(): void => console.log('Pressed Text Button')}
                            style={{ width: 150 }}
                        >
                            Press me
                        </Button>
                        <Button
                            icon="download"
                            mode="outlined"
                            onPress={(): void => console.log('Pressed Outlined Button')}
                            style={{ marginTop: 24, width: 150 }}
                        >
                            Press me
                        </Button>
                        <Button
                            icon="download"
                            mode="contained"
                            onPress={(): void => console.log('Pressed Contained Button')}
                            style={{ marginTop: 24, width: 150 }}
                        >
                            Press me
                        </Button>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Card</H5>
                    <View style={{ marginTop: 24 }}>
                        <Card>
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(): JSX.Element => (
                                    <Avatar.Icon
                                        icon="account-circle"
                                        size={40}
                                        theme={theme.dark ? blueDarkAlt : {}}
                                    />
                                )}
                            />
                            <Card.Content>
                                <Title>Card title</Title>
                                <Paragraph>Card content</Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions style={{ justifyContent: 'flex-end' }}>
                                <Button>Cancel</Button>
                                <Button>Ok</Button>
                            </Card.Actions>
                        </Card>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Checkbox</H5>
                    <View style={{ marginTop: 24 }}>
                        <Checkbox.Item
                            label="Init Unchecked"
                            status={checkboxOne}
                            onPress={(): void =>
                                checkboxOne === 'unchecked' ? setCheckboxOne('checked') : setCheckboxOne('unchecked')
                            }
                        />
                        <Checkbox.Item
                            label="Init checked"
                            status={checkboxTwo}
                            onPress={(): void =>
                                checkboxTwo === 'unchecked' ? setCheckboxTwo('checked') : setCheckboxTwo('unchecked')
                            }
                        />
                        <Checkbox.Item label="Indeterminate" status={'indeterminate'} />
                        <Checkbox.Item label="Disabled Checked" status={'checked'} disabled={true} />
                        <Checkbox.Item label="Disabled Unchecked" status={'unchecked'} disabled={true} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Chip</H5>
                    <Body1 style={{ marginTop: 8 }}>
                        The following Chip styles are hardcoded and not achievable via the theme.
                    </Body1>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <Chip
                            icon="information"
                            style={{ width: 250, backgroundColor: theme.dark ? Colors.black[500] : Colors.white[500] }}
                        >
                            Unselected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            selected={true}
                            selectedColor={theme.dark ? theme.colors.text : theme.colors.surface}
                            style={{ marginTop: 24, width: 250, backgroundColor: Colors.blue[500] }}
                            textStyle={{ color: theme.dark ? theme.colors.text : theme.colors.surface }}
                        >
                            Selected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            disabled={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                                backgroundColor: theme.dark
                                    ? Color(Colors.black[200]).alpha(0.24).rgb().string()
                                    : Colors.white[400],
                            }}
                        >
                            Disabled Flat Chip
                        </Chip>
                        <Chip icon="information" mode={'outlined'} style={{ marginTop: 24, width: 250 }}>
                            Unselected Outlined Chip
                        </Chip>
                        <Chip
                            icon="information"
                            mode={'outlined'}
                            selected={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                                backgroundColor: theme.dark
                                    ? Color(Colors.blue[500]).alpha(0.24).rgb().string()
                                    : Color(Colors.blue[500]).alpha(0.05).rgb().string(),
                            }}
                            selectedColor={theme.colors.primary}
                        >
                            Selected Outlined Chip
                        </Chip>
                        <Chip
                            icon="information"
                            mode={'outlined'}
                            disabled={true}
                            style={{ marginTop: 24, width: 250 }}
                        >
                            Disabled Outlined Chip
                        </Chip>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Data Table</H5>
                    <View style={{ marginTop: 24 }}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Dessert</DataTable.Title>
                                <DataTable.Title numeric>Calories</DataTable.Title>
                                <DataTable.Title numeric>Fat (g)</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell>Ice Cream</DataTable.Cell>
                                <DataTable.Cell numeric>137</DataTable.Cell>
                                <DataTable.Cell numeric>7</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Chocolate Chip Cookie</DataTable.Cell>
                                <DataTable.Cell numeric>78</DataTable.Cell>
                                <DataTable.Cell numeric>4.5</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Angel Food Cake</DataTable.Cell>
                                <DataTable.Cell numeric>129</DataTable.Cell>
                                <DataTable.Cell numeric>0.2</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Dialog</H5>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Dialog visible={dialogVisible} onDismiss={(): void => setDialogVisible(false)}>
                                <Dialog.Title>This is a title</Dialog.Title>
                                <Dialog.Content>
                                    <Paragraph>This is simple dialog</Paragraph>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={(): void => setDialogVisible(false)}>Cancel</Button>
                                    <Button onPress={(): void => setDialogVisible(false)}>Ok</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                        {!dialogVisible && (
                            <Button
                                mode={'contained'}
                                onPress={(): void => {
                                    setDialogVisible(true);
                                }}
                            >
                                Show Dialog
                            </Button>
                        )}
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Divider</H5>
                    <View style={{ marginTop: 24 }}>
                        <Body1>Item 1</Body1>
                        <Divider />
                        <Body1>Item 2</Body1>
                        <Divider />
                        <Body1>Item 3</Body1>
                        <Divider />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Fab</H5>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <FAB
                            style={{ margin: 16, width: 40 }}
                            small
                            icon="plus"
                            onPress={(): void => console.log('Pressed Small Fab')}
                            theme={theme.dark ? blueDarkAlt : {}}
                        />
                        <FAB
                            style={{ margin: 16, width: 56 }}
                            icon="plus"
                            onPress={(): void => console.log('Pressed Default Fab')}
                            theme={theme.dark ? blueDarkAlt : {}}
                        />
                        <FAB
                            style={{ margin: 16 }}
                            label={'Extended Fab'}
                            icon="check"
                            onPress={(): void => console.log('Pressed Extended Fab')}
                            theme={theme.dark ? blueDarkAlt : {}}
                        />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Helper Text</H5>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            label="Email"
                            value={helperTextInputText}
                            onChangeText={onChangeHelperTextInputText}
                            error={helperTextInputHasErrors()}
                        />
                        <HelperText type="error" visible={helperTextInputHasErrors()}>
                            Email address is invalid!
                        </HelperText>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Icon Button</H5>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 24 }}
                    >
                        <IconButton icon="fire" size={24} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={40} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={56} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={72} onPress={(): void => console.log('Icon Button Pressed')} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>List</H5>
                    <View style={{ marginTop: 24 }}>
                        <View>
                            <List.Item
                                title="Item 1"
                                description="Item 1 Description"
                                left={(): JSX.Element => <List.Icon icon="folder" />}
                            />
                            <List.Item
                                title="Item 2"
                                description="Item 2 Description"
                                left={(): JSX.Element => <List.Icon icon="folder" />}
                            />
                            <List.Item
                                title="Item 3"
                                description="Item 3 Description"
                                left={(): JSX.Element => <List.Icon icon="folder" />}
                            />
                        </View>
                        <View>
                            <List.Section title="Accordions">
                                <List.Accordion
                                    title="Accordion 1"
                                    left={(): JSX.Element => <List.Icon icon="folder" />}
                                    expanded={accordionOneExpanded}
                                    onPress={(): void => setAccordionOneExpanded(!accordionOneExpanded)}
                                >
                                    <List.Item title="Item 1" description="Item 1 Description" />
                                    <List.Item title="Item 2" description="Item 2 Description" />
                                </List.Accordion>
                                <List.Accordion
                                    title="Accordion 2"
                                    left={(): JSX.Element => <List.Icon icon="folder" />}
                                    expanded={accordionTwoExpanded}
                                    onPress={(): void => setAccordionTwoExpanded(!accordionTwoExpanded)}
                                >
                                    <List.Item title="Item 1" description="Item 1 Description" />
                                    <List.Item title="Item 2" description="Item 2 Description" />
                                </List.Accordion>
                            </List.Section>
                        </View>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Menu</H5>
                    <View style={{ marginTop: 24 }}>
                        <Menu
                            visible={menuVisible}
                            onDismiss={(): void => setMenuVisible(false)}
                            anchor={
                                <Button mode={'contained'} onPress={(): void => setMenuVisible(true)}>
                                    Show menu
                                </Button>
                            }
                        >
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 1" />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 2" />
                            <Divider />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 3" />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 4" />
                        </Menu>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Modal</H5>
                    <View style={{ marginTop: 24 }}>
                        <Portal theme={theme}>
                            <Modal
                                visible={modalVisible}
                                onDismiss={(): void => setModalVisible(false)}
                                contentContainerStyle={{
                                    backgroundColor: theme.colors.surface,
                                    padding: 24,
                                    height: 300,
                                    marginHorizontal: 24,
                                }}
                            >
                                <Body1>Example Modal. Click outside this area to dismiss.</Body1>
                            </Modal>
                        </Portal>
                        <Button
                            mode={'contained'}
                            onPress={(): void => {
                                setModalVisible(true);
                            }}
                        >
                            Show Modal
                        </Button>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Progress Bar</H5>
                    <View style={{ marginTop: 24 }}>
                        <ProgressBar progress={0} />
                        <ProgressBar progress={0.5} style={{ marginTop: 24 }} theme={theme.dark ? blueDarkAlt : {}} />
                        <ProgressBar progress={1.0} style={{ marginTop: 24 }} theme={theme.dark ? blueDarkAlt : {}} />
                        <ProgressBar indeterminate style={{ marginTop: 24 }} theme={theme.dark ? blueDarkAlt : {}} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Radio Button</H5>
                    <View style={{ marginTop: 24 }}>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonValue(value)}
                            value={radioButtonValue}
                        >
                            <RadioButton.Item label="First item" value="first" />
                            <RadioButton.Item label="Second item" value="second" />
                            <RadioButton.Item label="Third item" value="third" />
                        </RadioButton.Group>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Snackbar</H5>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Snackbar
                                visible={snackbarVisible}
                                onDismiss={(): void => setSnackbarVisible(false)}
                                action={{
                                    label: 'Dismiss',
                                    onPress: (): void => {
                                        setSnackbarVisible(false);
                                    },
                                }}
                                theme={theme.dark ? blueDarkAlt : {}}
                            >
                                Hey there! I&apos;m a Snackbar.
                            </Snackbar>
                        </Portal>
                        <Button mode={'contained'} onPress={(): void => setSnackbarVisible(!snackbarVisible)}>
                            {snackbarVisible ? 'Hide Snackbar' : 'Show Snackbar'}
                        </Button>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Surface</H5>
                    <View style={{ marginTop: 24 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Surface style={[styles.surface, { elevation: 1 }]}>
                                <Body1>Surface 1</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 2 }]}>
                                <Body1>Surface 2</Body1>
                            </Surface>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
                            <Surface style={[styles.surface, { elevation: 3 }]}>
                                <Body1>Surface 3</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 4 }]}>
                                <Body1>Surface 4</Body1>
                            </Surface>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
                            <Surface style={[styles.surface, { elevation: 5 }]}>
                                <Body1>Surface 5</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 6 }]}>
                                <Body1>Surface 6</Body1>
                            </Surface>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
                            <Surface style={[styles.surface, { elevation: 7 }]}>
                                <Body1>Surface 7</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 8 }]}>
                                <Body1>Surface 8</Body1>
                            </Surface>
                        </View>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Switch</H5>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={(): void => {
                                setIsSwitchOn(!isSwitchOn);
                            }}
                        />
                        <Switch disabled value={true} style={{ marginTop: 24 }} />
                        <Switch disabled value={false} style={{ marginTop: 24 }} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Text Input</H5>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            label="Name"
                            value={nameInputText}
                            onChangeText={(text: string): void => setNameInputText(text)}
                        />
                        <TextInput
                            label="Email"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={emailInputText}
                            onChangeText={(text: string): void => setEmailInputText(text)}
                        />
                        <TextInput
                            label="Name Error"
                            style={{ marginTop: 24 }}
                            value={errorNameInputText}
                            onChangeText={(text: string): void => setErrorNameInputText(text)}
                            error
                        />
                        <TextInput
                            label="Email Error"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={errorEmailInputText}
                            onChangeText={(text: string): void => setErrorEmailInputText(text)}
                            error
                        />
                        <TextInput label="Name Disabled" value="John Smith" style={{ marginTop: 24 }} disabled />
                        <TextInput
                            label="Email Disabled"
                            mode="outlined"
                            value="j.smith@email.com"
                            style={{ marginTop: 24 }}
                            disabled
                        />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Toggle Button</H5>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <ToggleButton.Row
                            onValueChange={(value: string): void => setToggleButtonValue(value)}
                            value={toggleButtonValue}
                        >
                            <ToggleButton icon="format-align-left" value="left" />
                            <ToggleButton icon="format-align-center" value="center" />
                            <ToggleButton icon="format-align-right" value="right" />
                        </ToggleButton.Row>
                    </View>
                </View>
            </Card>
        </>
    );
};
