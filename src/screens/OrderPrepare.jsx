

import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartFlatListByRestaurant } from '../redux/features/cart/cartSelectors';
import { fetchOrdersThunk } from '../redux/features/order/orderThunk';
import { selectRestaurantId } from '../redux/features/restaurants/restaurantsSelectors';
import store from '../redux/store';
import { useNavigation } from '@react-navigation/native';
const OrderPrepare = () => {
    const restaurantId = useSelector(state => selectRestaurantId(state));
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        const carts = selectCartFlatListByRestaurant(store.getState(), restaurantId);
        dispatch(fetchOrdersThunk(carts, "123street, City, Country"))
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Delivery');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <View className="flex-1 items-center justify-center ">
            <Image source={require('../../assets/images/order.gif')} className="w-full h-96" resizeMode='contain' />
            <Text className="text-2xl font-bold mb-2 text-center">Hang tight! </Text>
            <Text className="text-lg text-center text-gray-500 mb-6">We're getting your food ready.</Text>
        </View>
    )
}

export default OrderPrepare

