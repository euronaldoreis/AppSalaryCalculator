import React from 'react';

import {
    Container,
    ContainerScroll,
    ContainerHeader,
    ContainerSalary,
    ContainerSalaryInfo,
    ContainerSalaryMain,
    ContainerSalaryIcon,
    ContainerSalaryLabel,
    ContainerSalaryText,
    ContainerCard,
    ContainerCardTitle,
    ContainerResultText,
    ContainerResultDiscount,
    ContainerCardResult,
    ContainerCardResultLine,
    ContainerCardResultMain,
    ContainerCardResultInfo
} from './styles';

import { useRoute } from '@react-navigation/native';

import { calculateSalaryFrom } from '../../helpers/salary';
import { Text } from 'react-native';

interface Params {
    salary: number;
}

const Result: React.FC = () => {
    const routes = useRoute();

    
    const {
        salary
    } = routes.params as Params;
    
    const salaryObject = calculateSalaryFrom(salary);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      SalaryDiscount,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = salaryObject;

    return (
        <Container>
            <ContainerHeader />
            <ContainerSalary>
                    <ContainerSalaryMain>
                        <ContainerSalaryIcon>
                    
                        </ContainerSalaryIcon>
                        <ContainerSalaryInfo>
                            <ContainerSalaryLabel>Seu salário bruto</ContainerSalaryLabel>
                            <ContainerSalaryText>R$ {salary}</ContainerSalaryText>
                        </ContainerSalaryInfo>
                    </ContainerSalaryMain>
                </ContainerSalary>
            <ContainerCard>
                <ContainerCardTitle>
                    Descontos
                </ContainerCardTitle>
                    <ContainerCardResultMain>
                        <ContainerCardResultInfo>
                            <ContainerSalaryLabel>Base INSS</ContainerSalaryLabel>
                            <ContainerResultText>R$ {baseINSS}</ContainerResultText>
                        </ContainerCardResultInfo>
                    </ContainerCardResultMain>
                    <ContainerCardResultMain>
                        <ContainerCardResultInfo>
                            <ContainerSalaryLabel>Desconto INSS</ContainerSalaryLabel>
                            <ContainerResultDiscount>- R$ {discountINSS}</ContainerResultDiscount>
                        </ContainerCardResultInfo>
                    </ContainerCardResultMain>
                    <ContainerCardResultLine />
                    <ContainerCardResultMain>
                        <ContainerCardResultInfo>
                            <ContainerSalaryLabel>Base IRPF</ContainerSalaryLabel>
                            <ContainerResultText>R$ {baseIRPF}</ContainerResultText>
                        </ContainerCardResultInfo>
                    </ContainerCardResultMain>
                    <ContainerCardResultMain>
                        <ContainerCardResultInfo>
                            <ContainerSalaryLabel>Desconto IRPF</ContainerSalaryLabel>
                            <ContainerResultDiscount>- R$ {discountIRPF}</ContainerResultDiscount>
                        </ContainerCardResultInfo>
                    </ContainerCardResultMain>
            </ContainerCard>
            <ContainerCard>
            <ContainerCardTitle>
                    Total Descontado
                </ContainerCardTitle>
            </ContainerCard>
            <ContainerCard>
            <ContainerCardTitle>
                    Salário Líquido
                </ContainerCardTitle>
            </ContainerCard>
        </Container>
    )
}

export default Result;