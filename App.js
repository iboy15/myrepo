import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Buffer } from 'buffer';

// import

export default class App extends React.Component {
  async login() {
    const btoa = function(str) {
      return Buffer.from(str).toString('base64');
    };
    const username = 'iboy15';
    const password = 'azol1525';
    let auth = btoa(username + ':' + password);

    const url = 'https://api.github.com/authorizations';
    const response = await fetch(url, {
      method: 'GET',
      headers: { Authorization: 'Basic ' + auth }
    });
    const result = await response.json();

    result.message
      ? console.log(result.message)
      : this.fethUserProfile(username);
  }

  async fethUserProfile(username) {
    const url = 'https://api.github.com/users/' + null;
    const response = await fetch(url, { method: 'GET' });
    const result = await response.json();
    console.log(result);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.login()} title="tes" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
