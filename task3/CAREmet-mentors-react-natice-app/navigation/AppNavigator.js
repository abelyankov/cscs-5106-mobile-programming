import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BottomTabNavigator from './BottomTabNavigator';
import ScreenMentorDetails from "../screens/ScreenMentorDetails";
import ScreenMentors from "../screens/ScreenMentors";
import ScreenProfile from "../screens/ScreenProfile";
import ScreenHome from "../screens/ScreenHome";
import ScreenReports from "../screens/ScreenReports";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from "@expo/vector-icons";

const TabIconMentors = (props) => (
    <Ionicons
        name={'pricetag-outline'}
        size={30}
        color={props.focused ? '#29235C' : 'darkgrey'}
    />
);

const TabIconHome = (props) => (
    <Ionicons
        name={'home-outline'}
        size={30}
        color={props.focused ? '#29235C' : 'darkgrey'}
    />
);

const TabIconReports = (props) => (
    <Ionicons
        name={'repeat-outline'}
        size={30}
        color={props.focused ? '#29235C' : 'darkgrey'}
    />
);

const TabIconProfile = (props) => (
    <Ionicons
        name={'people-outline'}
        size={30}
        color={props.focused ? '#29235C' : 'darkgrey'}
    />
);

const Mentors = createStackNavigator({
    Main: {
        screen: ScreenMentors,
        navigationOptions: {
            headerTitle: "Наставники",
            headerTintColor: "#29235C"
        }
    },
    MentorDetails: {
        screen: ScreenMentorDetails,
        navigationOptions: ({ navigation }) => ({
            headerTitle: `Наставник #${navigation.state.params.key}`,
            headerTintColor: "#29235C"
        }),
    }
});

const Reports = createStackNavigator({
    Main: {
        screen: ScreenReports,
        navigationOptions: {
            headerTitle: "Отчеты",
            headerTintColor: "#29235C"
        }
    }
});

const Profile = createStackNavigator({
    Main: {
        screen: ScreenProfile,
        navigationOptions: {
            headerTitle: "Профиль",
            headerTintColor: "#29235C"
        }
    }
});

const Home = createStackNavigator({
    Main: {
        screen: ScreenHome,
        navigationOptions: {
            headerTitle: "Чаты",
            headerTintColor: "#29235C"
        }
    }
});
export default createAppContainer(
    createBottomTabNavigator({
        Чаты: { screen: Home, navigationOptions: {
                tabBarIcon: TabIconHome
            }},
        Наставники: { screen: Mentors, navigationOptions: {
            tabBarIcon: TabIconMentors
        }},
        Отчёты: { screen: Reports, navigationOptions: {
                tabBarIcon: TabIconReports
            }},
        Профиль: { screen: Profile, navigationOptions: {
                tabBarIcon: TabIconProfile
            }},
    }, {
        tabBarOptions: {
            showLabel: true,
            activeTintColor: '#29235C',
            inactiveTintColor: '#ccc',
            labelStyle: {
                fontSize: 14,
            },
        }
    })
);
