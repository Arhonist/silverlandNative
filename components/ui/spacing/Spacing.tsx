import { FunctionComponent } from 'react';
import { View } from 'react-native';

interface Props {
    height?: number;
}

const Spacing: FunctionComponent<Props> = ({ height = 10 }) => <View style={{ height }} />;

export default Spacing;
