import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'

const Spinner = (props) => {
  return (
    <View>
      {props.showLoading ? (
        <ActivityIndicator size="large" />
      ) : null}
    </View>
  )
}

Spinner.propTypes = {
  showLoading: PropTypes.bool.isRequired
}

export default Spinner

const styles = StyleSheet.create({})