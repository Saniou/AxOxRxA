import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className='justify-center items-center gap-2'>
      <Image
      source={icon}
      resizeMode='contain'
      tintColor={color}
      className='w-5 h-5'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        }
      }}
    >
      <Tabs.Screen
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.home} 
            color={color}
            name='Home'
            focused={focused}
            />
          )
        }}
        name="home"
      />
            <Tabs.Screen
        options={{
          title: 'BookMark',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.bookmark} 
            color={color}
            name='BookMark'
            focused={focused}
            />
          )
        }}
        name="bookmark"
      />
            <Tabs.Screen
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.plus} 
            color={color}
            name='Create'
            focused={focused}
            />
          )
        }}
        name="create"
      />
            <Tabs.Screen
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
            icon={icons.profile} 
            color={color}
            name='Profile'
            focused={focused}
            />
          )
        }}
        name="profile"
      />
    </Tabs>
    
    </>
  )
}

export default TabsLayout