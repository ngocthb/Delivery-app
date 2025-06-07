import { selectCart } from '../redux/features/cart/cartSelectors';
import { decreaseQuality } from '../redux/features/cart/cartSlice';

import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
const CartDetails = () => {
    const route = useRoute();
    const { id } = route.params;

    const cart = useSelector(state => selectCart(state));
    const dispatch = useDispatch();
    const { restaurant, loading, error } = useSelector((state) => state.restaurant);
    const res = {
        restaurant_id: restaurant._id,
        restaurant_name: restaurant.name,
        restaurant_image: restaurant.image,
    };

    const handleDecrease = (item) => {
        dispatch(decreaseQuality({ id: item.dish_id, price: item.price, name: item.name, image: item.image, res: res }));
    };

    if (loading) {
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: 220 }}>
                {Array.from({ length: 5 }, (_, index) => (
                    <View key={index} className="p-2">
                        <View className="flex-row items-center p-4 bg-gray-200 rounded-3xl animate-pulse">
                            <View className="w-10 h-6 bg-gray-300 rounded-md mr-2" />
                            <View className="w-16 h-16 bg-gray-300 rounded-full" />
                            <View className="flex-1 ml-4 flex-row justify-between items-center">
                                <View className="w-32 h-4 bg-gray-300 rounded-md" />
                                <View className="flex-row items-center">
                                    <View className="w-12 h-4 bg-gray-300 rounded-md mr-4" />
                                    <View className="w-8 h-8 bg-gray-400 rounded-full" />
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        );
    }
    if (error) {
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: 220 }}>
                <Text className="text-center text-red-500">Error loading cart. Please try again.</Text>
            </ScrollView>
        );
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 220 }}>
            {(cart || []).map((item, index) => (
                <View key={index}
                >
                    {(item.dishes || []).map((dish, dishIndex) => (<View key={dishIndex} className='p-2'>
                        <View className='flex-row items-center p-4 bg-white rounded-3xl shadow-md'>
                            <Text className='text-primary-500 font-bold w-10'>{dish.quantity}x</Text>

                            <Image
                                source={dish.image}
                                className='w-16 h-16 rounded-full'
                            />

                            <View className='flex-1 ml-4 flex-row justify-between items-center'>
                                <Text className='font-bold'>{dish.name}</Text>
                                <View className='flex-row items-center'>
                                    <Text className='text-gray-500 mr-4'>${dish.price}</Text>
                                    <TouchableOpacity className='bg-primary-500 w-8 h-8 rounded-full items-center justify-center' onPress={() => handleDecrease(dish)}>
                                        <Text className='text-white text-lg font-bold'>-</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>))}
                    {item.restaurant_id !== id && (
                        <View className="absolute inset-0 bg-white/60 z-10" pointerEvents="auto" />
                    )}
                </View>
            ))
            }
        </ScrollView >
    );
};

export default CartDetails;

