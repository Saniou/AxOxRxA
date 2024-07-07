import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
            className={`bg-[#FF8C00] mt-5 justify-center items-center rounded-xl min-h-[62px] w-[150px] ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}>
            <Text className={`text-black-200 font-semibold text-lg ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton