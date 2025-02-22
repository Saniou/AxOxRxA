import { View, Text, SafeAreaView, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { useGlobalContext } from '@/context/GlobalProvider'

import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {

  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-black h-full ">
      <ScrollView>
        <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
          <Image className='w-[115px] h-[35px]' source={images.logo} resizeMode='contain' />
          <Text className='text-white text-2xl font-semibold mt-10'>
            Create Account in Aora
          </Text>
          <FormField
            title='UserName'
            value={form.userName}
            handleChangeText={(e) => setForm({ ...form, userName: e })}
            otherStyle="mt-10"
          />

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
            title='Sign-Up'
            handlePress={submit}
            containerStyles='w-full mt-7'
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2 ">
            <Text className='text-white text-lg font-pregular'>
              Have an account already?
            </Text>
            <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp