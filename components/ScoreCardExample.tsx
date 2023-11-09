import React from 'react';
import { Hero, HeroBanner, InfoListItem, ScoreCard } from '@brightlayer-ui/react-native-components';
import { useTheme } from 'react-native-paper';
import { BLUIColors } from '@brightlayer-ui/colors';

export const ScoreCardExample: React.FC = () => {
    const theme = useTheme();
    return (
        <ScoreCard
            headerTitle={'Substation 42'}
            headerSubtitle={'Normal'}
            headerInfo={'42 Devices'}
            actionItems={[{ icon: { name: 'star-outline' } }, { icon: { name: 'more-vert' }, onPress: () => {} }]}
            badgeOffset={-55}
            badge={
                <HeroBanner style={{ flex: 0, minWidth: 80, justifyContent: 'flex-end' }}>
                    <Hero
                        iconBackgroundColor={theme.colors.surface}
                        label={'Score'}
                        iconSize={48}
                        iconColor={BLUIColors.success[50]}
                        ChannelValueProps={{
                            value: 98,
                            units: '/100',
                        }}
                        icon={{ family: 'brightlayer-ui', name: 'grade_a' }}
                    />
                </HeroBanner>
            }
            actionRow={<InfoListItem chevron title={'View More'} hidePadding />}
        />
    );
};
