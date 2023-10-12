import React from 'react';
import { Hero, ScoreCard } from '@brightlayer-ui/react-native-components';
import { BLUIColors } from '@brightlayer-ui/colors';

export const ScoreCardExample: React.FC = () => {
    return (
        <ScoreCard
            headerTitle={'Portland Datacenter Long Name'}
            headerSubtitle={'6 UPS Devices'}
            actionItems={[{ icon: { name: 'more-vert' }, onPress: () => {} }]}
            badgeOffset={-55}
            badge={
                <Hero
                    label={'Score'}
                    iconSize={30}
                    iconColor={BLUIColors.green[500]}
                    ChannelValueProps={{
                        value: 98,
                        units: '/100',
                    }}
                    icon={{ family: 'brightlayer-ui', name: 'grade_a' }}
                />
            }
            // actionRow={<InfoListItem chevron title={'View More'} onPress={() => {}} />}
        />
    );
};
