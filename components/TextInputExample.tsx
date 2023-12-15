import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, useTheme, HelperText, Text } from 'react-native-paper';

export const TextFieldExample: React.FC = () => {
    const theme = useTheme();
    const [normalText, setNormalText] = React.useState('');
    const [errorText, setErrorText] = React.useState('');
    const [disabledText, setDisabledText] = React.useState('');
    const [normalFilledText, setNormalFilledText] = React.useState('Hello');
    const [errorFilledText, setErrorFilledText] = React.useState('Hello');
    const [disabledFilledText, setDisabledFilledText] = React.useState('Hello');
    const [hasError, setHasError] = React.useState(true);

    const styles = StyleSheet.create({
        container: {
            marginTop: 16,
        },
        flatInput: {
            margin: 8,
        },
        outlineInput: {
            margin: 8,
            backgroundColor: 'transparent',
        },
        thinUnderline: {
            borderBottomWidth: 0, // Adjust the thickness as needed
        },
    });

    return (
        <View>
            <View style={styles.container}>
                <Text> Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalText(value)}
                    style={[styles.flatInput]}
                />

                <Text> Error Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    style={[styles.flatInput]}
                />
            </View>
            <View style={styles.container}>
                <Text> Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.flatInput]}
                />

                <Text> Error Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    style={[styles.flatInput]}
                />
            </View>
            <View style={styles.container}>
                <Text> Dense Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalText}
                    dense={true}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalText(value)}
                    style={[styles.flatInput]}
                />

                <Text> Error Dense Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    dense={true}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Dense Flat TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    dense={true}
                    style={[styles.flatInput]}
                />
            </View>
            <View style={styles.container}>
                <Text> Dense Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    dense={true}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.flatInput]}
                />

                <Text> Error Dense Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    dense={true}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Dense Flat Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="flat"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    dense={true}
                    style={[styles.flatInput]}
                />
            </View>
            <View style={{ marginTop: 30 }}>
                <Text> Normal Outlined TextInput </Text>
                <TextInput
                    label="Normal Outlined TextInput"
                    mode="outlined"
                    value={normalText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    outlineColor={theme.colors.outline}
                    onChangeText={(value) => setNormalText(value)}
                    style={styles.outlineInput}
                />

                <Text> Error Outlined TextInput </Text>
                <TextInput
                    label="Error Outlined TextInput"
                    mode="outlined"
                    value={errorText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    outlineColor={theme.colors.outline}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Outlined TextInput </Text>
                <TextInput
                    label="Disabled Outlined TextInput"
                    mode="outlined"
                    value={disabledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    outlineColor={theme.colors.outline}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    style={styles.outlineInput}
                />
            </View>

            <View style={styles.container}>
                <Text> Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.flatInput]}
                />

                <Text> Error Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    style={[styles.flatInput]}
                />
            </View>
            <View style={styles.container}>
                <Text> Dense Outline TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalText}
                    dense={true}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalText(value)}
                    style={[styles.flatInput]}
                />

                <Text> Error Dense Outline TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorText(value);
                        setHasError(value.length > 5);
                    }}
                    dense={true}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Dense Outline TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    value={disabledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledText(value)}
                    disabled
                    dense={true}
                    style={[styles.flatInput]}
                />
            </View>
            <View style={styles.container}>
                <Text> Dense Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={normalFilledText}
                    dense={true}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setNormalFilledText(value)}
                    style={[styles.flatInput]}
                />

                <Text> Error Dense Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    value={errorFilledText}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => {
                        setErrorFilledText(value);
                        setHasError(value.length > 4);
                    }}
                    dense={true}
                    error={hasError}
                    style={{ marginHorizontal: 8, marginTop: 8 }}
                />
                <HelperText type="error" visible={hasError} style={{ marginBottom: 8 }}>
                    Error Message
                </HelperText>

                <Text> Disabled Dense Outline Filled TextInput </Text>
                <TextInput
                    label="TextInput"
                    mode="outlined"
                    value={disabledFilledText}
                    left={<TextInput.Icon icon="email" />}
                    right={<TextInput.Icon icon="menu-down" />}
                    underlineColor={theme.colors.onSurfaceVariant}
                    onChangeText={(value) => setDisabledFilledText(value)}
                    disabled
                    dense={true}
                    style={[styles.flatInput]}
                />
            </View>
        </View>
    );
};
