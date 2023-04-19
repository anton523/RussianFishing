import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const RF4Screen = () => {
  return (
    <View style={styles.container}>
      <Text>RF4Screen</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default RF4Screen;