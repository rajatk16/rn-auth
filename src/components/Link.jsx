import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import { Text } from 'react-native-elements'
import PropTypes from 'prop-types'

const Link = (props) => (
  <View style={{...styles.containerStyle, ...props.containerStyle}}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{...styles.linkTextStyle}}>{props.linkText}</Text>
    </TouchableOpacity>
  </View>
)

Link.propTypes = {
  containerStyle: PropTypes.object,
  linkText: PropTypes.string.isRequired
}

export default Link

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center'
  },  
  linkTextStyle: {
    color: 'blue'
  }
})