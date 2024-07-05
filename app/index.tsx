import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  return (
   <View className="flex-1 items-center justify-center bg-white">
    <Text className="text-3xl font-pbold">Auro!</Text>
    <StatusBar style="auto"/>
    <Link className='text-[25px]' href="./profile">Go to profile</Link>
   </View>
  );
}
