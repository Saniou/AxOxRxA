import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';

import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-black h-full'>

      <ScrollView contentContainerStyle={{ height: '100%' }}>

        <View className='w-full justify-center items-center min-h-[85vh] px-4'>

          <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
          <Image source={images.cards} className="max-w-[380px] w-full h-[300px]" resizeMode='contain' />

          <View className='relative mt-5'>
            <Text className="text-white text-3xl font-bold text-center">
              Discover Endless           Posibilities with
              <Text className='text-secondary-200'>_AxOxRxA</Text>
            </Text>
            <Image source={images.path} className='w-[130px] h-[15px] absolute -bottom-3 -right-1' />
          </View>
          
          <Text className='flex- text-sm font-pregular text-gray-100 mt-8 text-center'>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>

          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
          />

        </View>

        <StatusBar backgroundColor='#000' style='light' />

      </ScrollView>

    </SafeAreaView>
  );
}
