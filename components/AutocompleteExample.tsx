import React from 'react';
import { AutoComplete } from '@brightlayer-ui/react-native-components';
import { Card} from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const AutoCompleteExample: React.FC = () => {
    const theme = useExtendedTheme();
    return (
        <Card style={{marginTop:20}}>
                <Card.Title title="AutoComplete" />
                <Card.Content>
                    <AutoComplete
                    helperText='helper text'
                    value={['tag1']}
                    disabled={false}
                    addCustomTag={true}
                    options={['tag1','tag2','tag3','tag4','abc','bcd']}
                    />
                </Card.Content>
            </Card>
    );
};
