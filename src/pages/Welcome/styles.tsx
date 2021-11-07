import { SafeAreaView, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const ViewContainer = styled(SafeAreaView)`
    flex: 1;
`;

export const ViewWrapper = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Title = styled(Text)`
    font-size: 28px;
    text-align: center;
    color: ${colors.heading};
    margin-top: 38px;
    line-height: 34px;
`;

export const WalletImg = styled(Image)`
    height: ${Dimensions.get('window').width * 0.6}px;
`;

export const ButtonStart = styled(TouchableOpacity)`
    background-color: ${colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-right: 10px;
    height: 56px;
    width: 56px;
`;

export const ButtonText = styled(Text)`
    font-size: 26px;
    font-weight: 800;
    color: ${colors.white};
`;