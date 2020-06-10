import React from 'react'
import {View, StyleSheet} from 'react-native'
import { Text, Button } from 'react-native-elements'
import {auth} from 'firebase'

import { Spacer } from '../components'

export default ({navigation, route}) => {
  navigation.setOptions({
    headerTitleAlign: 'center'
  })

  const logoutHandler = async () => {
    try {
      await auth().signOut()
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.containerStyle}>
      <Spacer>
        <Text h2>Logged In!</Text>
      </Spacer>
      <Spacer>
        <Text h3>Welcome!</Text>
      </Spacer>
      <Spacer>
        <Text>{route.params.email}</Text>
      </Spacer>
      <Spacer>
        <Button title="Logout" onPress={logoutHandler} />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  }
})