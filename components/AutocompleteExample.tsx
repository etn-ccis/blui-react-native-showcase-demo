import React from 'react';
import { AutoComplete } from '@brightlayer-ui/react-native-components';
import { Card } from 'react-native-paper';
import { useExtendedTheme } from '@brightlayer-ui/react-native-themes';

export const AutoCompleteExample: React.FC = () => {
    const theme = useExtendedTheme();
    return (
        <Card style={{ marginTop: 20 }}>
            <Card.Title title="AutoComplete" />
            <Card.Content>
                <AutoComplete
                    helperText="Helper text"
                    value={['Tag1']}
                    allowCustomtag={true}
                    label="Label"
                    options={['Tag1', 'Tag2', 'Tag3', 'Tag4']}
                />
            </Card.Content>
        </Card>
    );
};
