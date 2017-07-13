/**
 * TryOut 2
 * by Fitra Zul Fahmi
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class tryout2 extends Component {
  constructor() {
    super();
    const cn = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: cn.cloneWithRows(['Annabelle', 'Police Officer']),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My Contact App!
        </Text>
      </View>
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
        onClick={this.handleEvent}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tryout2', () => tryout2);

