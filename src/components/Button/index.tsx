import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    ButtonComponent,
    TextButton
} from './styles';
interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

const Button = ({title, ...rest}: ButtonProps) => {
    return (
            <ButtonComponent {...rest}>
                <TextButton>
                    {title}
                </TextButton>
            </ButtonComponent>
    )
}

export default Button;
