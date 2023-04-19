import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import MapsScreen from '../screens/MapsScreen';
import ForumScreen from '../screens/ForumScreen';
import RF4Screen from '../screens/RF4Screen';
import ProfileScreen from '../screens/ProfileScreen';

const homeName = 'Главная';
const mapsName = 'Карты';
const rf4Name = 'РР4';
const forumName = 'Форум';
const profileName = 'Профиль';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={homeName} screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let routeName = route.name;

          if (routeName === homeName){
            iconName = focused ? 'home' : 'home';
          } else if (routeName === mapsName){
            iconName = focused ? 'map' : 'map';
          } else if (routeName === rf4Name){
            iconName = focused ? 'book' : 'book';
          } else if (routeName === forumName){
            iconName = focused ? 'forumbee' : 'forumbee';
          } else if (routeName === profileName){
            iconName = focused ? 'user' : 'user';
          }

          return <Icon name={iconName} size={size} color={color}  />
        },
      })}>
        <Tab.Screen name={homeName} component={HomeScreen}/>
        <Tab.Screen name={rf4Name} component={RF4Screen}/>
        <Tab.Screen name={mapsName} component={MapsScreen}/>
        <Tab.Screen name={forumName} component={ForumScreen}/>
        <Tab.Screen name={profileName} component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;