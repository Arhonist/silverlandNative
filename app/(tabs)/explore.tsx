import { Button, Image, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Section from '@/components/ui/section/Section';
import Spacing from '@/components/ui/spacing/Spacing';
import { useEffect, useState } from 'react';
import { fetch } from 'expo/fetch';
import { ProductOutDto } from '@/types/api';

export default function TabTwoScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductOutDto[]>([]);

    useEffect(() => {
        fetch('https://silverland.fun/api/v1/public/product/category/ranks')
            .then((result) => result.json())
            .then((value: ProductOutDto[]) => {
                setProducts(value);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <ThemedText>Загружаем информацию о продуктах...</ThemedText>;
    }

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

                <ThemedView style={styles.cards}>
                    {products.map(({ id, name, imagePath, priceWithoutDiscount }) => (
                        <ThemedView key={id} style={styles.card}>
                            <Image source={{ uri: `https://silverland.fun${imagePath}` }} style={styles.cardImage} />

                            <ThemedText type={'defaultSemiBold'} style={{ textAlign: 'center' }}>
                                {name}
                            </ThemedText>

                            <Spacing />

                            <ThemedText style={{ textAlign: 'center' }}>{priceWithoutDiscount} руб.</ThemedText>

                            <Spacing />

                            <Button title={'Купить'} color={'green'} />
                        </ThemedView>
                    ))}
                </ThemedView>

                <Spacing height={30} />
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
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    },
    card: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        padding: 10
    },
    cardImage: {
        width: '100%',
        height: 450
    }
});
