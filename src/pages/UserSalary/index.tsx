import React, {useState} from 'react';
import { 
    Platform, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native';
import {
    ViewContainer,
    Container,
    ViewContent,
    ViewForm,
    ViewHeader,
    TextEmoji,
    TextTitle,
    InputSalary,
    ViewFooter,
    ViewError,
    TextError
} from './styles';

import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

const UserSalary: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [salary, SetSalary] = useState<number>();
    const [error, setError] = useState<boolean>(false);

    const navigation = useNavigation();

    const handleInputBlur = () => {
        setIsFocused(false);
        setIsFilled(!!salary);
    }

    const handleInputFocus = () => {
        setIsFocused(true);
    }

    const handleInputChange = (value: number) => {
        setIsFilled(!!value);
        setError(!value);
        SetSalary(value);
    }

    const handleSubmit = () => {
        if(salary){
            navigation.navigate('Result', {
                salary: salary
            });
        } else {
            setError(true);
        }
    }

    return (
        <ViewContainer>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ViewContent>
                        <ViewForm>
                            <ViewHeader>
                                <TextEmoji>
                                    { isFilled ? '🤑' : '😀'}
                                </TextEmoji>
                                <TextTitle>
                                    Vamos começar?
                                </TextTitle>
                            </ViewHeader>
                            <InputSalary
                                keyboardType="number-pad"
                                isFocused={isFilled}
                                isError={error}
                                placeholder="Digite o seu salário"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            <ViewFooter>
                                <Button 
                                    title="Calcular" 
                                    onPress={handleSubmit}
                                />
                            </ViewFooter>
                            <ViewError>
                                {error && (
                                    <TextError>Insira o seu salário</TextError>
                                )}
                            </ViewError>
                        </ViewForm>
                    </ViewContent>
                </TouchableWithoutFeedback>
            </Container>
        </ViewContainer>
    )
}

export default UserSalary;
