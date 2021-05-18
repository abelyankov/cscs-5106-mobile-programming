import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ScreenHome from '../screens/ScreenHome';
import ScreenMentors from '../screens/ScreenMentors';
import ScreenReports from '../screens/ScreenReports';
import ScreenProfile from '../screens/ScreenProfile';

const BottomTabNavigator = createBottomTabNavigator({
  Главная: ScreenHome,
  Наставники: ScreenMentors,
  Отчёты: ScreenReports,
  Профиль: ScreenProfile
}, {
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#29235C',
    inactiveTintColor: '#ccc',
    labelStyle: {
        fontSize: 14,
      },
  }
});

export default BottomTabNavigator;
