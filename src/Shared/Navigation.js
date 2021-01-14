import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Features/Home/Home'
import About from '../Features/About/About'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text} from 'react-native'
const Stack = createStackNavigator();

export default function Navigation(props) {
    const actionMoveToHome = () => {
        props.navigation.navigate('HomeScreen');

    };

    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={Home} 
            options={{headerShown : false}} />

            <Stack.Screen name="AboutScreen" component={About} 
            options={{headerShown : true, title: 'About Valin', 
            headerTintColor: 'red', 
            headerRight: ()=>{
                return(
                    <TouchableOpacity onPress={actionMoveToHome}>
                        <Text>
                            Humberger
                        </Text>
                    </TouchableOpacity>
                );
                
            }
            }} />
        </Stack.Navigator>
    );
};
