import React , { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import screens, { initial } from './routes';
const Stack = createStackNavigator();
import SplashScreen from 'react-native-splash-screen'



const AppPages = () => {
    useEffect(() => {
        SplashScreen.hide();
      }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initial}>
                {
                    screens.map(screen =>
                        <Stack.Screen key={screen.name} name={screen.name} component={screen.page} options={screen.options} />
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppPages;
