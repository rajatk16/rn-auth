import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Button} from 'react-native-elements'
import {Spacer} from '../components'

export default ({navigation}) => {
  navigation.setOptions({
    headerTitle: 'Welcome',
    headerTitleAlign: 'center'
  })
  return (
    <View style={styles.containerStyle}>
      <Spacer>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </Spacer>
      <Spacer>
        <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
      </Spacer>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  }
})