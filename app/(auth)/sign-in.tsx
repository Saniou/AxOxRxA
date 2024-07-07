import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmiting] = useState(false)

  const submitButton = () => {

  }

  return (
    <SafeAreaView className="bg-black h-full ">
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image className='w-[115px] h-[35px]' source={images.logo} resizeMode='contain' />
          <Text className='text-white text-2xl font-semibold mt-10'>
            Log in to Aora
          </Text>
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyle="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyle="mt-7"
          />

          <CustomButton
            title='Sign-In'
            handlePress={submitButton}
            containerStyles='w-full mt-7'
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2 ">
            <Text className='text-white text-lg font-pregular'>
              Don`t have account? Are you seriously?
            </Text>
            <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn 