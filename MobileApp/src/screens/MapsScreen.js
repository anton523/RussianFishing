import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MapsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MapsScreen</Text>
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

export default MapsScreen;