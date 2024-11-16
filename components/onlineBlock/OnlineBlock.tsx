import { FunctionComponent, useEffect, useState } from 'react';
import { fetch } from 'expo/fetch';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

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
        <ThemedView>
            <ThemedText>Онлайн на сервере:</ThemedText>
            <ThemedText>
                {online?.online} / {online?.max} человек
            </ThemedText>
        </ThemedView>
    );
};

export default OnlineBlock;
