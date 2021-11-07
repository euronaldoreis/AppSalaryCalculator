import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';

export const ButtonComponent = styled(TouchableOpacity)`
    background-color: ${colors.green};
    height: 56px;
    border-radius: 16px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled(Text)`
    font-size: 16px;
    color: ${colors.white};
`;