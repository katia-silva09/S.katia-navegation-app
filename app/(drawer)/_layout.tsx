import CustomDrawer from '@/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function DrawerLayout() {
  return (
    <Drawer
    drawerContent={CustomDrawer} 
    screenOptions={{
      headerShown: false,
      overlayStyle: { backgroundColor:'rgba(0,0,0,0.4)' },
      drawerActiveTintColor:'indigo',
      headerShadowVisible: false,
      sceneStyle: { backgroundColor: 'white' },
    }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Tabas + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({ color,size }) => <Ionicons size={size} name="layers-outline" color={color} />,
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',
          drawerIcon: ({ color,size }) => <Ionicons size={size} name="person-circle-outline" color={color} />,
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'horario',
          title: 'horario',
          drawerIcon: ({ color,size }) => <Ionicons size={size} name="calendar-outline" color={color} />,

        }}
      />
    </Drawer>  )
}