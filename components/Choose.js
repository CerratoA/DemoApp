import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image
} from 'react-native';

class Choose extends Component {
	render() {
		<View style={styles.container}>
			<Text style={styles.title}>
				Please choose what kind of you want:
			</Text>
			<View style={styles.rows}>
				<Text>Healthy!</Text>
				<Image style={styles.picks} source={{uri: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwityu_H__PNAhVLlx4KHUNlCgwQjRwIBw&url=http%3A%2F%2Fwww.dishmaps.com%2Ffood-types&psig=AFQjCNGwI28YIuqiGqUl0HXrYlqMGccc-g&ust=1468621429253888'}} />
			</View>
			<View style={styles.rows}>
				<Text>FastFood</Text>
				<Image style={styles.picks} source={{uri: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjT8OX1__PNAhVDGh4KHae2DS0QjRwIBw&url=https%3A%2F%2Fwww.brit.co%2Ffast-food%2F&bvm=bv.127178174,d.dmo&psig=AFQjCNEnmf2awnvgnFcR053VnJLnOqoJfg&ust=1468621563446391'}} />
			</View>

		</View>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8
  },
  rows: {
  	flex: 3,
  },
  picks: {
  	height: 50,
  	width: 50
  }
})