import { FunctionComponent, PropsWithChildren } from 'react';
import { View } from 'react-native';

const Section: FunctionComponent<PropsWithChildren> = ({ children }) => (
    <View style={{ paddingHorizontal: 16 }}>{children}</View>
);

export default Section;
