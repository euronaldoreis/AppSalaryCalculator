import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import UserSalary from '../pages/UserSalary';
import Result from '../pages/Result';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.white
            }
        }}
    >
        <stackRoutes.Screen 
            name="Welcome" 
            component={Welcome}
        />
        <stackRoutes.Screen 
            name="UserSalary" 
            component={UserSalary}
        />
        <stackRoutes.Screen 
            name="Result" 
            component={Result}
        />
    </stackRoutes.Navigator>
);

export default AppRoutes;
