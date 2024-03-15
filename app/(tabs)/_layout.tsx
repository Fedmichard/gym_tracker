import {View, Text} from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
import Colors from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Layout = () => {
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: Colors.dark.tabIconSelected,
            tabBarLabelStyle: {
                fontFamily: 'Relevance_Medium',
            },
            }}>

            <Tabs.Screen name="index" options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({color}) => 
                    <Feather name="user" size={24} color={color} />,
                }}/>
            <Tabs.Screen name="feed" options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({color, size}) => 
                    <Feather name="users" size={24} color={color} />,
                }}/>
            <Tabs.Screen name="workout" options={{
                tabBarLabel: 'Workout',
                tabBarIcon: ({color, size}) => 
                    <FontAwesome5 name="dumbbell" size={22} color={color} />,
                }}/>
            <Tabs.Screen name="log" options={{
                tabBarLabel: 'Log',
                tabBarIcon: ({color, size}) => 
                    <Feather name="calendar" size={24} color={color} />,
                }}/>
            <Tabs.Screen name="upgrade" options={{
                tabBarLabel: 'Upgrade',
                tabBarIcon: ({color, size}) => 
                    <FontAwesome5 name="crown" size={20} color={color} />,
                }}/>

        </Tabs>
    );
}

export default Layout;