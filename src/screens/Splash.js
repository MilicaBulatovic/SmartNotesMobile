/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import PushNotification from 'react-native-push-notification';
import GlobalStyle from '../utils/GlobalStyle';

export default function Splash({navigation}) {
  useEffect(() => {
    createChannels();
    setTimeout(() => {
      navigation.replace('My Tasks');
    }, 2000);
  }, [navigation]);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'task-channel',
      channelName: 'Task Channel',
    });
  };

  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={require('../../assets/checklist.png')}
      />
      <Text style={[GlobalStyle.CustomFontBig, styles.text]}>
        Milica's To-Do List
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0077',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: '#ffffff',
  },
});
