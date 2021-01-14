import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Navigation from './src/Shared/Navigation'

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}
