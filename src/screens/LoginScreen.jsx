import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {auth} from 'firebase'
import { AuthForm } from '../components'
import { Text } from 'react-native-elements'

export default ({navigation}) => { 
  navigation.setOptions({
    headerTitleAlign: 'center'
  })
  const [errorMessage, setErrorMessage] = useState('');
  const loginHandler = async (email, password) => {
    try {
      const response = await auth().signInWithEmailAndPassword(email, password)
      navigation.navigate('Success', {
        email: response.user.email
      })
    } catch (error) {
      setErrorMessage(error.message)
    }
  }
  return (
    <View style={styles.containerStyle}>
      {errorMessage ? (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      ): null}
      <AuthForm 
        buttonTitle="Log In"
        linkText="New User? Sign In"
        onSubmit={(email, password) => loginHandler(email, password)}
        navigationLink="Signup"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  errorMessageStyle: {
    color: 'red',
    textAlign: 'center',
    marginHorizontal: 25
  }
})