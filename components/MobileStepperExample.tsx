import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { MobileStepper, DotStepperVariant } from '@brightlayer-ui/react-native-components';
import { Button, Card, Divider, useTheme } from 'react-native-paper';
import * as Colors from '@brightlayer-ui/colors';

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
        <Card style={{ padding: 0, marginTop: 0, marginHorizontal: 10, marginBottom: 10 }}>
            <Button mode="contained" onPress={(): void => cycleStepperVariant()}>
                Cycle Variant
            </Button>
            <Divider />
            <Text style={{ margin: 32, textAlign: 'center', color: theme.colors.primary }}>
                Step #{currentStep + 1}
            </Text>
            <Divider />
            <MobileStepper
                activeStep={currentStep}
                steps={totalSteps}
                leftButton={
                    <View style={{ flex: 1 }}>
                        <Button
                            style={{ width: 100, alignSelf: 'flex-start' }}
                            disabled={currentStep === 0}
                            onPress={(): void => updateStep(-1)}
                            mode="outlined"
                        >
                            Back
                        </Button>
                    </View>
                }
                rightButton={
                    <View style={{ flex: 1 }}>
                        <Button
                            style={{ width: 100, alignSelf: 'flex-end' }}
                            disabled={currentStep === totalSteps - 1}
                            onPress={(): void => updateStep(1)}
                            mode="contained"
                        >
                            Next
                        </Button>
                    </View>
                }
                variant={mobileStepperVariant}
                activeColor={Colors.blue[500]}
            />
        </Card>
    );
};
