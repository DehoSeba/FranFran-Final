import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs  screenOptions={{
            tabBarActiveTintColor: 'blue',
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Cosplays"
                options={{
                    title: 'Cosplays',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-secret" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Cosplans"
                options={{
                    title: 'Cosplans',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar" color={color} />,
                }}
            />
            <Tabs.Screen
                name="Patrons"
                options={{
                    title: 'Patrons',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cut" color={color} />,
                }}
            /><Tabs.Screen
                name="Contact"
                options={{
                    title: 'Contact',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="envelope-o" color={color} />,
                }}
            />
        </Tabs>
    );
}
