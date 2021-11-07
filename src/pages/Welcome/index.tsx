import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
    ViewContainer,
    ViewWrapper,
    Title,
    WalletImg,
    ButtonStart,
    ButtonText
} from './styles';

import walletImg from '../../assets/wallet.png';

const Welcome: React.FC = () => {

    const navigation = useNavigation();

    const handleStart = () => {
        navigation.navigate('UserSalary');
    }

    return (
        <ViewContainer>
            <ViewWrapper>
                <Title>
                    Descubra o seu salário líquido.
                </Title>
                
                <WalletImg
                    source={walletImg}
                    resizeMode="contain"
                />

                <ButtonStart
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <ButtonText>
                        >
                    </ButtonText>
                </ButtonStart>

            </ViewWrapper>
        </ViewContainer>
    )
}

export default Welcome;
