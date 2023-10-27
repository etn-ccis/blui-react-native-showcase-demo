import { MD3DarkTheme, configureFonts } from 'react-native-paper';
import { fontConfig } from './shared';

export const MD3BluiDarkTheme = {
    ...MD3DarkTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
        ...MD3DarkTheme.colors,
        primary: '#B1DAFF',
        onPrimary: '#003063',
        primaryContainer: '#00468C',
        onPrimaryContainer: '#D0EAFD',
        secondary: '#B1DAFF',
        onSecondary: '#003063',
        secondaryContainer: '#00468C',
        onSecondaryContainer: '#D0EAFD',
        tertiary: '#B1DAFF',
        onTertiary: '#003063',
        tertiaryContainer: '#00468C',
        onTertiaryContainer: '#D0EAFD',
        error: '#FFB4AB',
        // errorNonText: '#FF5449',
        onError: '#690005',
        errorContainer: '#93000A',
        onErrorContainer: '#FFDAD6',
        background: '#141C1F',
        onBackground: '#EBF1F4',
        surface: '#141C1F',
        onSurface: '#EBF1F4',
        surfaceVariant: '#333F48',
        onSurfaceVariant: '#A8ABB4',
        outline: '#8E9099',
        outlineVariant: '#44474E',
        shadow: '#000000',
        scrim: '#000000',
        inverseSurface: 'rgb(241, 240, 244)',
        inverseOnSurface: 'rgb(47, 48, 51)',
        inversePrimary: 'rgb(169, 199, 255)',
        elevation: {
            level0: 'transparent',
            level1: '#192024',
            level2: '#1E262A',
            level3: '#293338',
            level4: '#29363D',
            level5: '#2C3941',
        },
        surfaceDisabled: 'rgba(26, 27, 30, 0.12)',
        onSurfaceDisabled: 'rgba(26, 27, 30, 0.38)',
        backdrop: 'rgba(45, 48, 56, 0.4)',
        // @TODO verify disabled color for dark theme
        disabled: '#192024',
        // @TODO verify neutral30
        neutralVariant: {
            neutral10: '#181C22',
            neutral30: '#414E54',
            neutral100: '#FFFFFF',
        },
        // warning: '#FBE365',
        // warningNonText: '#DDC437',
        // onWarning: '#383000',
        // warningContainer: '#524700',
        // onWarningContainer: '#FBE365',
        // success: '#65E049',
        // successNonText: '#48C32E',
        // onSuccess: '#053900',
        // successContainer: '#0B5300',
        // onSuccessContainer: '#95F77D',
        // orange: '#FFB876',
        // orangeNonText: '#ED8B00',
        // onOrange: '#4B2800',
        // orangeContainer: '#6B3B00',
        // onOrangeContainer: '#FFDCC0',
        // purple: '#DCB8FF',
        // purpleNonText: '#B56EFF',
        // onPurple: '#480081',
        // purpleContainer: '#6700B5',
        // onPurpleContainer: '#F0DBFF'
    },
};
