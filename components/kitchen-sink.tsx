/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-console */
//import {Text} from '@brightlayer-ui/react-native-components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Appbar,
    Avatar,
    Badge,
    Banner,
    Button,
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
    Portal,
    RadioButton,
    Surface,
    Switch,
    ToggleButton,
    TextInput,
    Text,
    useTheme,
    ProgressBar,
    Snackbar,
    ActivityIndicator,
} from 'react-native-paper';
// import { TextInput as TextInput } from './-text-input';
/* import {
  ActivityIndicator,
  Appbar,
  Avatar,
  Badge,
  Button,
  BottomNavigation,
  Checkbox,
  Chip,
  Divider,
  FAB,
  ProgressBar,
  RadioButton,
  Snackbar,
  Switch,
  TextInput,
  ToggleButton,
} from '@brightlayer-ui/react-native-components/'; */
import { DISABLE_FONT_SCALE, MAX_FONT_SCALE } from '../constants';
import { ChannelValue, ListItemTag, Overline, EmptyState, Hero } from '@brightlayer-ui/react-native-components';
import BLUIIcon from '@brightlayer-ui/react-native-vector-icons';
const PublicDomainAlice = require('../assets/images/public-domain-alice.png');

const MusicRoute = (): JSX.Element => <Text>Music</Text>;
const AlbumsRoute = (): JSX.Element => <Text>Albums</Text>;
const RecentsRoute = (): JSX.Element => <Text>Recents</Text>;

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
    information: {
        marginTop: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export const KitchenSink: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const [bannerVisible, setBannerVisible] = React.useState(true);
    const [checkboxAndroidOne, setCheckboxAndroidOne] = React.useState<'checked' | 'unchecked' | 'indeterminate'>(
        'unchecked'
    );
    const [checkboxAndroidTwo, setCheckboxAndroidTwo] = React.useState<'checked' | 'unchecked' | 'indeterminate'>(
        'checked'
    );
    const [checkboxIOSOne, setCheckboxIOSOne] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
    const [checkboxIOSTwo, setCheckboxIOSTwo] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('checked');
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [helperTextInputText, setHelperTextInputText] = React.useState('');
    const [accordionOneExpanded, setAccordionOneExpanded] = React.useState(false);
    const [accordionTwoExpanded, setAccordionTwoExpanded] = React.useState(false);
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [radioButtonAndroidValue, setRadioButtonAndroidValue] = React.useState('first');
    const [radioButtonIOSValue, setRadioButtonIOSValue] = React.useState('first');
    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const [snackbarTwoVisible, setSnackbarTwoVisible] = React.useState(false);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [toggleButtonValue, setToggleButtonValue] = useState('left');
    const [nameInputText, setNameInputText] = React.useState('');
    const [emailInputText, setEmailInputText] = React.useState('');
    const [errorNameInputText, setErrorNameInputText] = React.useState('');
    const [errorEmailInputText, setErrorEmailInputText] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const onChangeHelperTextInputText = (text: string): void => setHelperTextInputText(text);

    const helperTextInputHasErrors = (): boolean => !helperTextInputText.includes('@');

    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'music', color: 'red', badge: true },
        {
            key: 'albums',
            title: 'Albums',
            icon: 'album',
            color: 'orange',
            badge: '1',
        },
        { key: 'recents', title: 'Recents', icon: 'history', color: 'yellow' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }: { open: boolean }): void => setState({ open });

    const { open } = state;

    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);

    const [items] = React.useState([
        {
            key: 1,
            name: 'Cupcake',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'Eclair',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    const showDialog = (): void => setDialogVisible(true);
    const hideDialog = (): void => setDialogVisible(false);

    const showModal = (): void => setVisible(true);
    const hideModal = (): void => setVisible(false);

    return (
        <>
            <Text style={{ marginVertical: 48 }}>MD3 BLUI Components</Text>
            <Card style={styles.card}>
                <Card.Title title="Overline" />
                <Card.Content>
                    <Overline>Overline</Overline>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Icon (Icon Button)" />
                <Card.Content>
                    <IconButton icon={(iconProps) => <BLUIIcon name="broccoli" {...iconProps} />} onPress={() => {}} />
                    <IconButton icon="chart-pie" onPress={() => {}} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="ChannelValue" />
                <Card.Content>
                    <ChannelValue
                        value="2"
                        units="tb"
                        icon={{ family: 'brightlayer-ui', name: 'device' }}
                        iconColor="green"
                    />
                    <ChannelValue
                        value="50"
                        units="%"
                        icon={{ family: 'material-community', name: 'chart-pie' }}
                        iconColor="red"
                        style={{ marginTop: 12 }}
                    />
                    <ChannelValue value="2.5:1" icon={{ name: 'settings' }} style={{ marginTop: 12 }} />
                    <ChannelValue value="Concord" icon={'🍇'} style={{ marginTop: 12 }} />
                    <ChannelValue value="1" icon={'A'} iconColor="blue" style={{ marginTop: 12 }} />
                    <ChannelValue value="1" icon={PublicDomainAlice} style={{ marginTop: 12 }} />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="ListItemTag" />
                <Card.Content style={{ alignItems: 'center' }}>
                    <ListItemTag label={'IN PROGRESS'} />
                    <ListItemTag
                        label={'Foo Bar'}
                        backgroundColor={'red'}
                        fontColor={'black'}
                        style={{ marginTop: 12 }}
                    />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Hero" />
                <Card.Content style={{ alignItems: 'center' }}>
                <Hero
                    label={'Charged'}
                    icon={{ family: 'brightlayer-ui', name: 'battery' }}
                    ChannelValueProps={{ value: 100, units: '%' }}
                />
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Title title="Empty State" />
                <Card.Content style={{ alignItems: 'center' }}>
                    <EmptyState
                        title={'Nothing Found'}
                        description={'Not a single thing'}
                        icon={{ family: 'brightlayer-ui', name: 'battery' }}
                    />
                </Card.Content>
            </Card>
            <Text style={{ marginVertical: 48 }}>RN V5 Components</Text>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Banner</Text>
                    <View style={{ marginTop: 24 }}>
                        <Banner
                            visible={bannerVisible}
                            actions={[
                                {
                                    label: 'Fix it',
                                    onPress: () => setBannerVisible(false),
                                },
                                {
                                    label: 'Learn more',
                                    onPress: () => setBannerVisible(false),
                                },
                            ]}
                            icon={(props) => <Avatar.Icon {...props} icon="account-circle" />}
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
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Card</Text>
                    <View style={{ marginTop: 24 }}>
                        <Card>
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(props) => <Avatar.Icon {...props} icon="folder" />}
                            />
                            <Card.Content>
                                <Text variant="titleLarge">Card title</Text>
                                <Text variant="bodyMedium">Card conteent</Text>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions>
                                <Button>Cancel</Button>
                                <Button>Ok</Button>
                            </Card.Actions>
                        </Card>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Data Table</Text>
                    <View style={{ marginTop: 24 }}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Dessert</DataTable.Title>
                                <DataTable.Title numeric>Calories</DataTable.Title>
                                <DataTable.Title numeric>Fat</DataTable.Title>
                            </DataTable.Header>

                            {items.slice(from, to).map((item) => (
                                <DataTable.Row key={item.key}>
                                    <DataTable.Cell>{item.name}</DataTable.Cell>
                                    <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                                    <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                                </DataTable.Row>
                            ))}

                            <DataTable.Pagination
                                page={page}
                                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                                // eslint-disable-next-line @typescript-eslint/no-shadow
                                onPageChange={(page): void => setPage(page)}
                                label={`${from + 1}-${to} of ${items.length}`}
                                numberOfItemsPerPageList={numberOfItemsPerPageList}
                                numberOfItemsPerPage={itemsPerPage}
                                onItemsPerPageChange={onItemsPerPageChange}
                                showFastPaginationControls
                                selectPageDropdownLabel={'Rows per page'}
                            />
                        </DataTable>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Dialog</Text>
                    <View style={{ marginTop: 36 }}>
                        <Button mode={'contained'} onPress={showDialog}>
                            Show Dialog
                        </Button>
                        <Portal>
                            <Dialog visible={dialogVisible} onDismiss={hideDialog}>
                                <Dialog.Title>Alert</Dialog.Title>
                                <Dialog.Content>
                                    <Text variant="bodyMedium">This is simple dialog</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={hideDialog}>Done</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Helper Text</Text>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            label="Email"
                            value={helperTextInputText}
                            onChangeText={onChangeHelperTextInputText}
                        />
                        <HelperText type="error" visible={helperTextInputHasErrors()}>
                            Email address is invalid!
                        </HelperText>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Icon Button</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <IconButton icon="fire" size={24} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={40} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={56} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={72} onPress={(): void => console.log('Icon Button Pressed')} />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>List</Text>
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
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Menu</Text>
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
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Modal</Text>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Modal
                                visible={visible}
                                onDismiss={hideModal}
                                contentContainerStyle={{
                                    backgroundColor: theme.colors.surface,
                                    padding: 24,
                                    height: 300,
                                    marginHorizontal: 24,
                                }}
                            >
                                <Text>Example Modal. Click outside this area to dismiss.</Text>
                            </Modal>
                        </Portal>
                        <Button mode={'contained'} style={{ marginTop: 30 }} onPress={showModal}>
                            Show Modal
                        </Button>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Surface</Text>
                    <View style={{ marginTop: 24 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Surface style={[styles.surface, { elevation: 1 }]}>
                                <Text>Surface 1</Text>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 2 }]}>
                                <Text>Surface 2</Text>
                            </Surface>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginTop: 24,
                            }}
                        >
                            <Surface style={[styles.surface, { elevation: 3 }]}>
                                <Text>Surface 3</Text>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 4 }]}>
                                <Text>Surface 4</Text>
                            </Surface>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginTop: 24,
                            }}
                        >
                            <Surface style={[styles.surface, { elevation: 5 }]}>
                                <Text>Surface 5</Text>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 6 }]}>
                                <Text>Surface 6</Text>
                            </Surface>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginTop: 24,
                            }}
                        >
                            <Surface style={[styles.surface, { elevation: 7 }]}>
                                <Text>Surface 7</Text>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 8 }]}>
                                <Text>Surface 8</Text>
                            </Surface>
                        </View>
                    </View>
                </View>
            </Card>

            {/**
             * BEGIN  WRAPPER COMPONENT SECTION
             *  */}

            <Text style={{ marginVertical: 48 }}> (Wrapper) Components</Text>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Activity Indicator</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <ActivityIndicator animating={true} size={'small'} />
                        <ActivityIndicator animating={true} size={'large'} />
                        <ActivityIndicator animating={true} size={'small'} />
                        <ActivityIndicator animating={true} size={'large'} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Appbar</Text>
                    <View style={{ marginTop: 24 }}>
                        <Appbar.Header style={{ marginBottom: 16 }}>
                            <Appbar.BackAction onPress={(): void => console.log('Went Back')} />
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" onPress={(): void => console.log('Searching')} />
                            <Appbar.Action icon="dots-vertical" onPress={(): void => console.log('Shown more')} />
                        </Appbar.Header>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.BackAction />
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <Appbar>
                            <Appbar.BackAction />
                            <Appbar.Content title="Title" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Avatar</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Avatar.Icon size={40} icon="account-circle" />
                        <Avatar.Image size={40} source={PublicDomainAlice} />
                        <Avatar.Text size={40} label="PX" />
                        <Avatar.Icon size={40} icon="account-circle" />
                        <Avatar.Image size={40} source={PublicDomainAlice} />
                        <Avatar.Text size={40} label="PX" />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Badge</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Badge
                            size={24}
                            visible
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        ></Badge>
                        <Badge
                            size={24}
                            visible
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        >
                            3
                        </Badge>
                        <Badge
                            size={40}
                            visible
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        >
                            8
                        </Badge>
                        <Badge size={24} visible></Badge>
                        <Badge size={24} visible>
                            3
                        </Badge>
                        <Badge size={40} visible>
                            8
                        </Badge>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>BottomNavigation</Text>
                    <View style={{ marginTop: 24 }}>
                        <BottomNavigation
                            style={{ marginBottom: 16 }}
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            renderScene={renderScene}
                            labelMaxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <BottomNavigation
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            renderScene={renderScene}
                        />
                    </View>
                </View>
            </Card>

            <Card style={{ padding: 20, margin: 20, marginBottom: 0 }}>
                <Text>Button</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
                        mode="text"
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ width: 150 }}
                    >
                        Press me
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
                        mode="outlined"
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24, width: 150 }}
                    >
                        Press me
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="contained"
                        onPress={(): void => console.log('Pressed Contained Button')}
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
            </Card>
            <Card style={{ padding: 20, margin: 20, marginBottom: 0 }}>
                <Text>Button(Disabled)</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="text"
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                    <Button
                        icon="download"
                        mode="text"
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="outlined"
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                    <Button
                        icon="download"
                        mode="outlined"
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="contained"
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                    <Button
                        icon="download"
                        mode="contained"
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Checkbox (Android)</Text>
                    <View style={{ marginTop: 24 }}>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Unchecked</Text>
                            <Checkbox.Android
                                status={checkboxAndroidOne}
                                onPress={(): void =>
                                    checkboxAndroidOne === 'unchecked'
                                        ? setCheckboxAndroidOne('checked')
                                        : setCheckboxAndroidOne('unchecked')
                                }
                            />
                            <Checkbox.Android
                                status={checkboxAndroidOne}
                                onPress={(): void =>
                                    checkboxAndroidOne === 'unchecked'
                                        ? setCheckboxAndroidOne('checked')
                                        : setCheckboxAndroidOne('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Checked</Text>
                            <Checkbox.Android
                                status={checkboxAndroidTwo}
                                onPress={(): void =>
                                    checkboxAndroidTwo === 'unchecked'
                                        ? setCheckboxAndroidTwo('checked')
                                        : setCheckboxAndroidTwo('unchecked')
                                }
                            />
                            <Checkbox.Android
                                status={checkboxAndroidTwo}
                                onPress={(): void =>
                                    checkboxAndroidTwo === 'unchecked'
                                        ? setCheckboxAndroidTwo('checked')
                                        : setCheckboxAndroidTwo('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Indeterminate</Text>
                            <Checkbox.Android status={'indeterminate'} />
                            <Checkbox.Android status={'indeterminate'} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Checked</Text>
                            <Checkbox.Android status={'checked'} disabled={true} />
                            <Checkbox.Android status={'checked'} disabled={true} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Unchecked</Text>
                            <Checkbox.Android status={'unchecked'} disabled={true} />
                            <Checkbox.Android status={'unchecked'} disabled={true} />
                        </View>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Checkbox (iOS)</Text>
                    <View style={{ marginTop: 24 }}>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Unchecked</Text>
                            <Checkbox.IOS
                                status={checkboxIOSOne}
                                onPress={(): void =>
                                    checkboxIOSOne === 'unchecked'
                                        ? setCheckboxIOSOne('checked')
                                        : setCheckboxIOSOne('unchecked')
                                }
                            />
                            <Checkbox.IOS
                                status={checkboxIOSOne}
                                onPress={(): void =>
                                    checkboxIOSOne === 'unchecked'
                                        ? setCheckboxIOSOne('checked')
                                        : setCheckboxIOSOne('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Init Checked</Text>
                            <Checkbox.IOS
                                status={checkboxIOSTwo}
                                onPress={(): void =>
                                    checkboxIOSTwo === 'unchecked'
                                        ? setCheckboxIOSTwo('checked')
                                        : setCheckboxIOSTwo('unchecked')
                                }
                            />
                            <Checkbox.IOS
                                status={checkboxIOSTwo}
                                onPress={(): void =>
                                    checkboxIOSTwo === 'unchecked'
                                        ? setCheckboxIOSTwo('checked')
                                        : setCheckboxIOSTwo('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Indeterminate</Text>
                            <Checkbox.IOS status={'indeterminate'} />
                            <Checkbox.IOS status={'indeterminate'} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Checked</Text>
                            <Checkbox.IOS status={'checked'} disabled={true} />
                            <Checkbox.IOS status={'checked'} disabled={true} />
                        </View>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Disabled Unchecked</Text>
                            <Checkbox.IOS status={'unchecked'} disabled={true} />
                            <Checkbox.IOS status={'unchecked'} disabled={true} />
                        </View>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Chip</Text>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <Chip
                            icon="information"
                            style={{
                                width: 250,
                            }}
                        >
                            Unselected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            selected={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                        >
                            Selected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            disabled={true}
                            style={{
                                marginTop: 24,
                                width: 250,
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
                            }}
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
                        <Divider style={{ width: '100%', marginTop: 24 }} />
                        <Chip
                            icon="information"
                            style={{
                                width: 250,
                                marginTop: 24,
                            }}
                            onClose={(): void => {}}
                        >
                            Unselected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            selected={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                            onClose={(): void => {}}
                        >
                            Selected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            disabled={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                            onClose={(): void => {}}
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
                            }}
                        >
                            Selected Outlined Chip
                        </Chip>
                        <Chip
                            icon="information"
                            mode={'outlined'}
                            disabled={true}
                            selected
                            style={{ marginTop: 24, width: 250 }}
                        >
                            Disabled Outlined Chip
                        </Chip>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Divider</Text>
                    <View style={{ marginTop: 24 }}>
                        <Text>Item 1</Text>
                        <Divider />
                        <Text>Item 2</Text>
                        <Divider />
                        <Text>Item 3</Text>
                        <Divider />
                        <Text>Item 1</Text>
                        <Divider />
                        <Text>Item 2</Text>
                        <Divider />
                        <Text>Item 3</Text>
                        <Divider />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Fab</Text>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <FAB
                            style={{ margin: 16, width: 40 }}
                            size="small"
                            icon="plus"
                            onPress={(): void => console.log('Pressed Small Fab')}
                        />
                        <FAB
                            style={{ margin: 16, width: 56 }}
                            icon="plus"
                            onPress={(): void => console.log('Pressed Default Fab')}
                        />
                        <FAB
                            style={{ margin: 16 }}
                            label={'Extended Fab'}
                            icon="check"
                            onPress={(): void => console.log('Pressed Extended Fab')}
                        />
                    </View>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <FAB
                            style={{ margin: 16, width: 40 }}
                            size="small"
                            icon="plus"
                            onPress={(): void => console.log('Pressed Small Fab')}
                        />
                        <FAB
                            style={{ margin: 16, width: 56 }}
                            icon="plus"
                            onPress={(): void => console.log('Pressed Default Fab')}
                        />
                        <FAB
                            style={{ margin: 16 }}
                            label={'Extended Fab'}
                            icon="check"
                            onPress={(): void => console.log('Pressed Extended Fab')}
                        />
                    </View>
                </View>
                <Portal>
                    <FAB.Group
                        visible
                        open={open}
                        icon={open ? 'calendar-today' : 'plus'}
                        actions={[
                            { icon: 'plus', onPress: (): void => console.log('Pressed add') },
                            {
                                icon: 'star',
                                label: 'Star',
                                onPress: (): void => console.log('Pressed star'),
                            },
                            {
                                icon: 'email',
                                label: 'Email',
                                onPress: (): void => console.log('Pressed email'),
                            },
                            {
                                icon: 'bell',
                                label: 'Remind',
                                onPress: (): void => console.log('Pressed notifications'),
                            },
                        ]}
                        onStateChange={onStateChange}
                        onPress={(): void => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Progress Bar</Text>
                    <View style={{ marginTop: 24 }}>
                        <ProgressBar progress={0} />
                        <ProgressBar progress={0.5} style={{ marginTop: 24 }} />
                        <ProgressBar progress={1.0} style={{ marginTop: 24 }} />
                        <ProgressBar indeterminate style={{ marginTop: 24 }} />
                        <ProgressBar progress={0} style={{ marginTop: 24 }} />
                        <ProgressBar progress={0.5} style={{ marginTop: 24 }} />
                        <ProgressBar progress={1.0} style={{ marginTop: 24 }} />
                        <ProgressBar indeterminate style={{ marginTop: 24 }} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Radio Button (Android)</Text>
                    <View style={{ marginTop: 24 }}>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonAndroidValue(value)}
                            value={radioButtonAndroidValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.Android value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.Android value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.Android value="third" />
                            </View>
                        </RadioButton.Group>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonAndroidValue(value)}
                            value={radioButtonAndroidValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.Android value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.Android value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.Android value="third" />
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Radio Button (iOS)</Text>
                    <View style={{ marginTop: 24 }}>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonIOSValue(value)}
                            value={radioButtonIOSValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.IOS value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.IOS value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.IOS value="third" />
                            </View>
                        </RadioButton.Group>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonIOSValue(value)}
                            value={radioButtonIOSValue}
                        >
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>First Item</Text>
                                <RadioButton.IOS value="first" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Second Item</Text>
                                <RadioButton.IOS value="second" />
                            </View>
                            <View style={styles.row}>
                                <Text style={{ flex: 1 }}>Third Item</Text>
                                <RadioButton.IOS value="third" />
                            </View>
                        </RadioButton.Group>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Snackbar</Text>
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
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Snackbar</Text>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Snackbar
                                visible={snackbarTwoVisible}
                                onDismiss={(): void => setSnackbarTwoVisible(false)}
                                action={{
                                    label: 'Dismiss',
                                    onPress: (): void => {
                                        setSnackbarTwoVisible(false);
                                    },
                                }}
                            >
                                Hey there! I&apos;m a Snackbar.
                            </Snackbar>
                        </Portal>
                        <Button mode={'contained'} onPress={(): void => setSnackbarTwoVisible(!snackbarTwoVisible)}>
                            {snackbarTwoVisible ? 'Hide Snackbar' : 'Show Snackbar'}
                        </Button>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Switch</Text>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <View style={styles.row}>
                            <Text style={{ flex: 1 }}>Enabled - On</Text>
                            <Switch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                            />
                            <Switch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Text style={{ flex: 1 }}>Enabled - Off</Text>
                            <Switch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                            />
                            <Switch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Text style={{ flex: 1 }}>Disabled - On</Text>
                            <Switch disabled value={true} />
                            <Switch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                disabled
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Text style={{ flex: 1 }}>Disabled - Off</Text>
                            <Switch disabled value={false} />
                            <Switch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                disabled
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Text Input</Text>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            label="Name"
                            value={nameInputText}
                            onChangeText={(text: string): void => setNameInputText(text)}
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Email"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={emailInputText}
                            onChangeText={(text: string): void => setEmailInputText(text)}
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Name Error"
                            style={{ marginTop: 24 }}
                            value={errorNameInputText}
                            onChangeText={(text: string): void => setErrorNameInputText(text)}
                            error
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Email Error"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={errorEmailInputText}
                            onChangeText={(text: string): void => setErrorEmailInputText(text)}
                            error
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Name Disabled"
                            value="John Smith"
                            style={{ marginTop: 24 }}
                            disabled
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <TextInput
                            label="Email Disabled"
                            mode="outlined"
                            value="j.smith@email.com"
                            style={{ marginTop: 24 }}
                            disabled
                            allowFontScaling={!DISABLE_FONT_SCALE}
                            maxFontSizeMultiplier={MAX_FONT_SCALE}
                        />
                        <Divider
                            style={{
                                marginTop: 24,
                                marginHorizontal: -24,
                                backgroundColor: 'cyan',
                            }}
                        />
                        <TextInput
                            label="Name"
                            style={{ marginTop: 24 }}
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
                <View
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 24,
                        marginVertical: 24,
                    }}
                >
                    <Text>Toggle Button</Text>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <ToggleButton.Row
                            onValueChange={(value: string): void => setToggleButtonValue(value)}
                            value={toggleButtonValue}
                        >
                            <ToggleButton icon="format-align-left" value="left" />
                            <ToggleButton icon="format-align-center" value="center" />
                            <ToggleButton icon="format-align-right" value="right" />
                        </ToggleButton.Row>
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
