import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';

interface Props extends PropsWithChildren {
    headerImage: ReactElement;
    headerBackgroundColor: { dark: string; light: string };
    headerHeight?: number;
}

export default function ParallaxScrollView({
    children,
    headerImage,
    headerBackgroundColor,
    headerHeight = 200
}: Props) {
    const styles = getStyles(headerHeight);

    const colorScheme = useColorScheme() ?? 'light';
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);
    const bottom = useBottomTabOverflow();
    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-headerHeight, 0, headerHeight],
                        [-headerHeight / 2, 0, headerHeight * 0.75]
                    )
                },
                {
                    scale: interpolate(scrollOffset.value, [-headerHeight, 0, headerHeight], [2, 1, 1])
                }
            ]
        };
    });

    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                scrollIndicatorInsets={{ bottom }}
                contentContainerStyle={{ paddingBottom: bottom }}
            >
                <Animated.View
                    style={[
                        styles.header,
                        { backgroundColor: headerBackgroundColor[colorScheme] },
                        headerAnimatedStyle
                    ]}
                >
                    {headerImage}
                </Animated.View>

                <ThemedView style={styles.content}>{children}</ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const getStyles = (headerHeight: number) =>
    StyleSheet.create({
        container: {
            flex: 1
        },
        header: {
            height: headerHeight,
            overflow: 'hidden'
        },
        content: {
            flex: 1,
            overflow: 'hidden'
        }
    });
