'use strict';

import React, { Component } from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  ListView,
  Image,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import globals from '../globals';
import scheduleJson from '../schedule.json.js';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      loading: true,
      scrollDistance: new Animated.Value(0),
      dataSource: ds.cloneWithRowsAndSections(scheduleJson)
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          renderSectionHeader={this.renderSectionHeader.bind(this)}
          automaticallyAdjustContentInsets={false} />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    var title = <Text style={[styles.title, styles.titleSingle]}>{rowData.title}</Text>;
    var circleStyle;
    var countryLabel;
    var content;

    if(rowData.place) {
      circleStyle = {backgroundColor: globals.colors.secondary};
      if(rowData.place.country) {
        countryLabel = `(${rowData.place.country})`;
      }
      title = (
        <View style={styles.speakerInfo}>
          <Image style={styles.speakerAvatar} source={{uri: rowData.place.avatarUrl}} />
          <View style={styles.speakerDescription}>
            <Text style={styles.title}>{rowData.title}</Text>
            <Text style={styles.speakerName}>{rowData.place.city} { countryLabel }</Text>
          </View>
        </View>
      )
    }

    content = (
      <View style={styles.row}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{rowData.distance}</Text>
        </View>
        <View style={styles.details}>
          <View style={[styles.circle, circleStyle]}></View>
          { title }
          <View style={styles.separator}></View>
        </View>
      </View>
    );

    if(rowData.place) {
      return (
        <TouchableOpacity onPress={() => this._onRowPressed(rowData)} key={rowID}>
          { content }
        </TouchableOpacity>
      );
    }

    return (
      <View key={rowID}>
        { content }
      </View>
    );
  }

  renderSectionHeader(sectionData, sectionID) {
    var scrollDistance = this.state.scrollDistance;
    var headerStyles = {
      // height: scrollDistance.interpolate({
      //   inputRange: [40, 130],
      //   outputRange: [130, 40],
      //   extrapolate: 'clamp',
      // })
    };

    return (
      <Animated.View style={[styles.sectionHeader, headerStyles]}>
        <Text style={styles.sectionHeaderText}>
          {sectionID}
        </Text>
      </Animated.View>
    );
  }

  _onRowPressed(rowData) {
    var route = {
      name: 'details',
      title: 'Talk Details',
      talkInfo: rowData
    };

    this.props.navigator.push(route);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  // ListView
  list: {
    flex: 1
  },
  // SectionHeader
  sectionHeader: {
    marginBottom: 15,
    backgroundColor: globals.colors.secondary,
    height: 30,
    justifyContent: 'center'
  },
  sectionHeaderText: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center'
  },
  // Row
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  timeContainer: {
    width: 40
  },
  timeText: {
    color: globals.colors.lightGrey,
    textAlign: 'left'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#88C057',
    position: 'absolute',
    left: -5,
    top: 0
  },
  details: {
    borderColor: globals.colors.lightGrey,
    borderLeftWidth: 1,
    flexDirection: 'column',
    flex: 1,
    marginLeft: 20,
    paddingLeft: 20
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: globals.colors.primary,
    marginBottom: 6
  },
  titleSingle: {
    marginBottom: 0
  },
  speakerInfo: {
    flexDirection: 'row'
  },
  speakerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  speakerDescription: {
    flex: 1
  },
  separator: {
    height: .5,
    backgroundColor: globals.colors.lightGrey,
    marginTop: 15,
    marginBottom: 15
  }
});

module.exports = Schedule;
