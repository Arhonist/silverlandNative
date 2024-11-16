import { Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Section from '@/components/ui/section/Section';
import Spacing from '@/components/ui/spacing/Spacing';

export default function TabTwoScreen() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            headerImage={<Image source={require('@/assets/images/chest.png')} style={styles.background} />}
            headerHeight={300}
        >
            <Section>
                <Spacing />

                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">Магазин</ThemedText>
                </ThemedView>

                <Spacing />

                <ThemedText>Скоро здесь что-нибудь обязательно появится!</ThemedText>
            </Section>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        gap: 8
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
