import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ForumScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ForumScreen</Text>
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

export default ForumScreen;