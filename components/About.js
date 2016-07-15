import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image
} from 'react-native';

import globals from '../globals';

class About extends Component {
	render() {
		return (	
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>
						This is the about page for this DemoApp
					</Text>
				</View>
				<View style={styles.profile}><Image style={styles.picture} source={{uri: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/971161_10151924797474848_81393398_n.jpg?oh=eadbe5432b16b755b91892bc79885d76&oe=5827B536'}} /></View>
				<View style={styles.content}>
					<Text style={styles.rows}>Created by: Alberto Cerrato</Text>
					<Text style={styles.rows}>Front-end Developer</Text>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column'
  },
  title: {
  	flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
  	flexDirection: 'row',
  	flex: 2,
  	alignItems: 'center',
  	justifyContent: 'flex-end'
  },
  rows: {
  	fontSize: 14,
  	textAlign: 'center',
  	marginLeft: 8,
  	marginRight: 8
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: globals.colors.primary,
    borderWidth: 4,
    marginBottom: 15,
  },
  profile: {
  	flex: 3,
  	justifyContent: 'center',
  	alignItems: 'center',
    padding: 15
  },
  content: {
  	flex: 3,
  	alignItems: 'center',
  	flexDirection: 'column',
  	paddingTop: 10
  }
})

module.exports = About;