import { SafeAreaView, KeyboardAvoidingView, View, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${colors.shape};
`;

export const ContainerScroll = styled(ScrollView)`
    flex: 1;
`;

export const ContainerHeader = styled(View)`
    width: 100%;
    height: 20%;
    background-color: ${colors.green};
`;

export const ContainerSalary = styled(View)`
    border-radius: 10px;
    margin-right: 6%;
    margin-left: 6%;
    margin-top: -50px;
    padding: 20px;
    background-color: ${colors.white};
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContainerSalaryMain = styled(View)`
    flex-direction: row;
    justify-content: space-around;
`;

export const ContainerSalaryIcon = styled(View)`
    background-color: ${colors.green_light};
    border-radius: 10px;
    width: 20%;
`;

export const ContainerSalaryInfo = styled(View)`
    margin-left: 20px;
    width: 80%;
`;

export const ContainerSalaryLabel = styled(Text)`
    font-size: 16px;
    color: ${colors.heading};
`;

export const ContainerSalaryText = styled(Text)`
    font-size: 26px;
    font-weight: 800;
    color: ${colors.black};
`;

export const ContainerCard = styled(View)`
    border-radius: 10px;
    margin-right: 6%;
    margin-left: 6%;
    margin-top: 10px;
    padding: 20px;
    background-color: ${colors.white};
`;

export const ContainerCardTitle = styled(Text)`
    font-size: 18px;
    font-weight: 800;
    color: ${colors.black};
    margin-bottom: 20px;
`;

export const ContainerResultText = styled(Text)`
    font-size: 18px;
    font-weight: 800;
    color: ${colors.black};
`;

export const ContainerResultDiscount = styled(Text)`
    font-size: 18px;
    font-weight: 800;
    color: ${colors.red};
`;

export const ContainerCardResult = styled(View)`

`;

export const ContainerCardResultLine = styled(View)`
    border-bottom-width: 0.4px;
    border-bottom-color: ${colors.gray};
    padding-bottom: 20px;
    margin-bottom: 20px;
`;

export const ContainerCardResultMain = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerCardInfo = styled(View)`
    flex-direction: column;
`;

export const ContainerCardResultInfo = styled(View)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;