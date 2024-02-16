import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { Provider } from 'react-redux'
import MyStore from './src/redux/MyStore'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <Provider store={MyStore}>

      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
   </Provider>
  )
}

export default App
