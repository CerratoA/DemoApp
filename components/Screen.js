import React, { Component }  from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import globals from  '../globals'

class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{ this.props.title }</Text>
        </View>
        { this.props.children }
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: globals.colors.primary,
    height: 64
  },
  headerText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 32,
    alignSelf: 'center',
  }
});

module.exports = Screen;