import React from 'react'
import {View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const Spacer = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
)

export default Spacer

const styles = StyleSheet.create({
  containerStyle: {
    margin: 20
  }
})