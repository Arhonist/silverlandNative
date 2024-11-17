import { Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import OnlineBlock from '@/components/onlineBlock/OnlineBlock';
import { WelcomingTextBlock } from '@/components/welcomingTextBlock/WelcomingTextBlock';
import Spacing from '@/components/ui/spacing/Spacing';
import Section from '@/components/ui/section/Section';

export default function HomeScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#1D3D47', dark: '#1D3D47' }}
            headerImage={<Image source={require('@/assets/images/background.png')} style={styles.background} />}
            headerHeight={300}
        >
            <Section>
                <Spacing height={15} />

                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Добро пожаловать на сервер Minecraft SilverLand!</ThemedText>
                    <HelloWave />
                </ThemedView>

                <Spacing />
            </Section>

            <ThemedView style={styles.stepContainer}>
                <OnlineBlock />
            </ThemedView>

            <WelcomingTextBlock />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8
    },
    background: {
        height: 300,
        width: '100%',
        bottom: 0,
        left: 0,
        top: 0,
        position: 'absolute'
    }
});
