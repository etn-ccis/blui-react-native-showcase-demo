import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { MobileStepper, DotStepperVariant, Body1 } from '@pxblue/react-native-components';
import { Card, Divider, useTheme } from 'react-native-paper';
import * as Colors from '@brightlayer-ui/colors';
import { ThemedButton } from '@pxblue/react-native-components/themed';

const PADDING = 10;

export const MobileStepperExample: React.FC = () => {
    const theme = useTheme();
    const totalSteps = 5;
    const [currentStep, setCurrentStep] = useState(0);
    const [mobileStepperVariant, setMobileStepperVariant] = useState<DotStepperVariant>('dots');

    const updateStep = useCallback(
        (delta: number): void => {
            setCurrentStep(currentStep + delta);
        },
        [currentStep]
    );

    const cycleStepperVariant = (): void => {
        switch (mobileStepperVariant) {
            case 'dots':
                setMobileStepperVariant('text');
                break;
            case 'text':
                setMobileStepperVariant('progress');
                break;
            default:
                setMobileStepperVariant('dots');
                break;
        }
    };

    return (
        <Card style={{ padding: 0, margin: PADDING, marginBottom: PADDING }}>
            <ThemedButton mode="contained" onPress={(): void => cycleStepperVariant()}>
                Cycle Variant
            </ThemedButton>
            <Divider />
            <Body1 style={{ margin: 32, textAlign: 'center', color: theme.colors.text }}>Step #{currentStep + 1}</Body1>
            <Divider />
            <MobileStepper
                activeStep={currentStep}
                steps={totalSteps}
                leftButton={
                    <View style={{ flex: 1 }}>
                        <ThemedButton
                            style={{ width: 100, alignSelf: 'flex-start' }}
                            disabled={currentStep === 0}
                            onPress={(): void => updateStep(-1)}
                            mode="outlined"
                        >
                            Back
                        </ThemedButton>
                    </View>
                }
                rightButton={
                    <View style={{ flex: 1 }}>
                        <ThemedButton
                            style={{ width: 100, alignSelf: 'flex-end' }}
                            disabled={currentStep === totalSteps - 1}
                            onPress={(): void => updateStep(1)}
                            mode="contained"
                        >
                            Next
                        </ThemedButton>
                    </View>
                }
                variant={mobileStepperVariant}
                activeColor={Colors.blue[500]}
            ></MobileStepper>
        </Card>
    );
};
