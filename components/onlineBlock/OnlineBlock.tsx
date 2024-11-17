import { FunctionComponent, useEffect, useState } from 'react';
import { fetch } from 'expo/fetch';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import Spacing from '@/components/ui/spacing/Spacing';
import { StyleSheet } from 'react-native';

interface Online {
    online: number;
    max: number;
}

const OnlineBlock: FunctionComponent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [online, setOnline] = useState<Online>();

    useEffect(() => {
        fetch('https://silverland.fun/api/v1/public/online')
            .then((result) => result.json())
            .then((value: Online) => {
                setOnline(value);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <ThemedText>Загружаем информацию о сервере...</ThemedText>;
    }

    return (
        <ThemedView style={styles.wrapper}>
            <ThemedText style={styles.text}>Онлайн на сервере:</ThemedText>
            <Spacing />
            <ThemedText style={styles.text}>
                {online?.online} / {online?.max} человек
            </ThemedText>
        </ThemedView>
    );
};

export default OnlineBlock;

export const styles = StyleSheet.create({
    wrapper: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(0, 60, 0, 0.5)',
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});
