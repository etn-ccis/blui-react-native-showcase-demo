import React, { useCallback, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { MobileStepper, DotStepperVariant } from '@brightlayer-ui/react-native-components';
import { Button, Card, Divider, useTheme } from 'react-native-paper';
import * as BLUIColors from '@brightlayer-ui/colors';

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

    const styles = StyleSheet.create({
        card: {
            padding: 0,
            margin: 10,
        },
        text: {
            margin: 32,
            textAlign: 'center',
            color: theme.colors.primary,
        },
        button: {
            width: 100,
        },
        leftButton: {
            alignSelf: 'flex-start',
        },
        rightButton: {
            alignSelf: 'flex-end',
        },
    });

    return (
        <Card style={styles.card}>
            <Button mode="contained" onPress={(): void => cycleStepperVariant()}>
                Cycle Variant
            </Button>
            <Divider />
            <Text style={styles.text}>Step #{currentStep + 1}</Text>
            <Divider />
            <MobileStepper
                activeStep={currentStep}
                steps={totalSteps}
                leftButton={
                    <Button
                        style={[styles.button, styles.leftButton]}
                        disabled={currentStep === 0}
                        onPress={(): void => updateStep(-1)}
                        mode="outlined"
                    >
                        Back
                    </Button>
                }
                rightButton={
                    <Button
                        style={[styles.button, styles.rightButton]}
                        disabled={currentStep === totalSteps - 1}
                        onPress={(): void => updateStep(1)}
                        mode="contained"
                        buttonColor={currentStep === totalSteps - 1 ? theme.colors.disabledContainer : undefined}
                        textColor={currentStep === totalSteps - 1 ? theme.colors.onDisabledContainer : undefined}
                    >
                        Next
                    </Button>
                }
                variant={mobileStepperVariant}
                activeColor={BLUIColors.primary[50]}
            />
        </Card>
    );
};
