import { SafeAreaView, KeyboardAvoidingView, View, Text, TextInput } from 'react-native';
import styled from 'styled-components';

import colors from '../../styles/colors';

interface InputProps {
    isFocused: boolean;
}

export const ViewContainer = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

export const ViewContent = styled(View)`
    flex: 1;
    width: 100%;
`;

export const ViewForm = styled(View)`
    flex: 1;
    justify-content: center;
    padding-horizontal: 54px;
    align-items: center;
    width: 100%;
`;

export const ViewHeader = styled(View)`
    align-items: center;
`;

export const TextEmoji = styled(Text)`
    font-size: 44px;
`;

export const TextTitle = styled(Text)`
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: ${colors.heading};
    margin-top: 20px;
`;

export const InputSalary = styled(TextInput)<InputProps>`
    border-bottom-width: 1px;
    border-color: ${props => (props.isFocused ? `${colors.green}` : props.isError ? `${colors.red}` : `${colors.gray}`)};
    color: ${colors.heading};
    width: 100%;
    font-size: 18px;
    margin-top: 50px;
    padding: 10px;
    text-align: center;
`;

export const ViewFooter = styled(View)`
    width: 100%;
    margin-top: 40px;
    padding-horizontal: 20px;
`;

export const ViewError = styled(View)`
    padding-top: 20px;
`;

export const TextError = styled(Text)`
    font-size: 18px;
    color: ${colors.red};
`;

