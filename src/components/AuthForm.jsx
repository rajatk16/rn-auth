import React, {useState} from 'react'
import {View, StyleSheet} from 'react-native'
import { Input, Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import {withNavigation} from '@react-navigation/compat'

import Spacer from './Spacer'
import Link from './Link'

const AuthForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View>
      <Spacer>
        <Input 
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          label="Email" 
          placeholder="user@example.com" 
          value={email} 
          onChangeText={setEmail} 
        />
      </Spacer>
      <Spacer>
        <Input 
          label="Password" 
          secureTextEntry 
          placeholder="Enter atleast 8 characters" 
          value={password} 
          onChangeText={setPassword}
        />
      </Spacer>
      <Spacer>
        <Button title={props.buttonTitle} onPress={() => props.onSubmit(email, password)} />
      </Spacer>
      <Spacer>
        <Link linkText={props.linkText} onPress={() => props.navigation.navigate(props.navigationLink)} />
      </Spacer>
    </View>
  )
}

AuthForm.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  linkText: PropTypes.string.isRequired,
  navigationLink: PropTypes.string.isRequired
}

export default withNavigation(AuthForm)

const styles = StyleSheet.create({})