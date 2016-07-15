
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import globals from './globals';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  BackAndroid,
  Navigator,
  ScrollView
} from 'react-native';

import NavBar from './components/NavBar';
import Choose from './components/Choose';
import Screen from './components/Screen';
import Schedule from './components/Schedule';
import TalkDetails from './components/TalkDetails';
import About from './components/About';

var ICON_SIZE = 24;

var routes = {
  list: { name: 'list', title: 'Must visit places' },
  details: { name: 'details', title: 'Place Details' }
};

class demoProject extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'Home'
    };
  }
  componentDidMount() {
        if (BackAndroid) {
      BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress.bind(this));
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            title="Places"
            renderIcon={() => <Image source={{uri: `${globals.serverUrl}/images/reactjs-conf/schedule-icon.png`}} style={styles.icon} />}
            selected={this.state.selectedTab === 'Home'}
            onPress={() => { this.setState({selectedTab: 'Home'}); }}>
            <Navigator
              style={[styles.container, styles.navigator]}
              initialRoute={routes.list}
              renderScene={this.renderScene.bind(this)}
              navigationBar={NavBar}
              ref={component => this._navigator = component} />
          </TabNavigator.Item>
          <TabNavigator.Item
            title="About the app"
            renderIcon={() => <Image source={{uri: `${globals.serverUrl}/images/reactjs-conf/venue-icon.png`}} style={styles.icon} />}
            selected={this.state.selectedTab === 'venue'}
            onPress={() => { this.setState({selectedTab: 'venue'}); }}>
            <Screen title="About">
              <About />
            </Screen>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
  renderScene(route, navigator) {
    if(route.name === 'list') {
      return <Schedule navigator={navigator} />
    } else if(route.name === 'details') {
      return <TalkDetails navigator={navigator} talk={route.talkInfo} />
    }
  }
  renderSceneTwo(route, navigator) {
    if(route.name === 'list') {
      return <Choose navigator={navigator} />
    } else if(route.name === 'details') {
      return <FoodDetails navigator={navigator} data= {route.foodInfo}/>
    }
  }

  _handleBackButtonPress() {
    if (this._navigator.getCurrentRoutes().length > 1) {
      this._navigator.pop();
      return true;
    }

    return false;
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navigator: {
    paddingTop: 64
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: 'contain'
  }
});

AppRegistry.registerComponent('demoProject', () => demoProject);