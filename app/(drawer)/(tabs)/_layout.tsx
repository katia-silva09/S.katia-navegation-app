import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stacks',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={28} name="people-outline" color={color} />,
        }}
      />     
       <Tabs.Screen
        name="/home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="/favorites/index"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={color} />,
        }}
      />
    </Tabs>  );
}

export default TabLayout;

