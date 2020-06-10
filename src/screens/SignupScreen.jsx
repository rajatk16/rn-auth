import React, {useState} from 'react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import {Text} from 'react-native-elements'
import {auth} from 'firebase'
import { AuthForm, Spinner } from '../components'

export default ({navigation}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  navigation.setOptions({
    headerTitleAlign: 'center'
  })

  const signUpHandler = async (email, password) => {
    try {
      setShowLoading(true)
      const response = await auth().createUserWithEmailAndPassword(email, password)
      setShowLoading(false)
      navigation.navigate('Success', {
        email: response.user.email
      })
    } catch (error) {
      setShowLoading(false)
      setErrorMessage(error.message)
    }
  }
  return (
    <View style={styles.containerStyle}>
      <Spinner showLoading={showLoading} />
      {errorMessage ? (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      ) : null}
      <AuthForm 
        onSubmit={signUpHandler} 
        buttonTitle="Signup"
        linkText="Already Have an Account? Try Logging In"
        navigationLink="Login"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  errorMessageStyle: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 20
  }
})