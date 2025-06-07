import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import { fetchCartThunk } from "../redux/features/cart/cartThunks";
import { fetchTypesThunk } from "../redux/features/type/typeThunk";
import { useNavigation } from "@react-navigation/native";
export const featured = {
    id: "adqe1",
    title: "Hot and Spicy",
    description: "Soft and tender fried chicken",
    restaurants: [
        {
            id: "dihaud1",
            name: "Papa Johns",
            image: { uri: "https://picsum.photos/64/64" },
            description: "Hot and spicy pizzas",
            lng: 38.2145602,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Fast Food",
            dishes: [
                {
                    id: "12h",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "h21fj",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "afhaudh1",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
            ],
        },
        {
            id: "dihaud1",
            name: "Papa Johns",
            image: { uri: "https://picsum.photos/64/64" },
            description: "Hot and spicy pizzas",
            lng: 38.2145602,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Fast Food",
            dishes: [
                {
                    id: "12h",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "h21fj",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "afhaudh1",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
            ],
        },
        {
            id: "dihaud1",
            name: "Papa Johns",
            image: { uri: "https://picsum.photos/64/64" },
            description: "Hot and spicy pizzas",
            lng: 38.2145602,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Fast Food",
            dishes: [
                {
                    id: "12h",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "h21fj",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "afhaudh1",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
            ],
        },
        {
            id: "dihaud1",
            name: "Papa Johns",
            image: { uri: "https://picsum.photos/64/64" },
            description: "Hot and spicy pizzas",
            lng: 38.2145602,
            lat: -85.5324269,
            address: "434 second street",
            stars: 4,
            reviews: "4.4k",
            category: "Fast Food",
            dishes: [
                {
                    id: "12h",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "h21fj",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
                {
                    id: "afhaudh1",
                    name: "Pizza",
                    description: "Cheezy garlic pizza",
                    price: 10,
                    image: { uri: "https://picsum.photos/64/64" },
                },
            ],
        },
    ],
};



const HomePage = () => {
    const navigation = useNavigation();
    const [showDropDown, setShowDropDown] = useState(false);
    const handleCloseDropdown = () => {
        if (showDropDown) setShowDropDown(false);
    };

    const dispatch = useDispatch();
    const { types, loading, error } = useSelector((state) => state.types);
    useEffect(() => {
        dispatch(fetchTypesThunk());
        dispatch(fetchCartThunk());
    }, [dispatch]);

    const handleLogOut = () => {
        alert("Logout clicked");

    }





    if (loading) {
        return (
            <SafeAreaView className="bg-gray-100 flex-1">
                <View className="px-4 pt-4 pb-2">
                    {/* Search Bar Skeleton */}
                    <View className="flex-row items-center space-x-3">
                        <View className="flex-1 h-12 bg-gray-300 rounded-full animate-pulse" />
                        <View className="w-12 h-12 bg-gray-300 rounded-full animate-pulse" />
                    </View>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    className="px-4"
                >
                    {/* Categories Skeleton */}
                    <View className="mt-4 flex-row flex-wrap justify-between">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <View key={i} className="items-center w-[22%] mb-4">
                                <View className="aspect-square w-full rounded-full bg-gray-300 animate-pulse" />
                                <View className="w-full h-3 mt-2 rounded-md bg-gray-300 animate-pulse" />
                            </View>
                        ))}
                    </View>

                    {/* Feature Rows Skeleton */}
                    <View className="mt-6 space-y-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <View key={i} className="mb-4">
                                {/* Title */}
                                <View className="w-32 h-5 bg-gray-300 rounded-md animate-pulse mb-3" />
                                {/* Restaurant Cards */}
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    <View className="flex-row space-x-4">
                                        {Array.from({ length: 3 }).map((_, j) => (
                                            <View
                                                key={j}
                                                className="w-52 h-32 mr-3 bg-gray-300 rounded-xl animate-pulse"
                                            />
                                        ))}
                                    </View>
                                </ScrollView>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>

        );
    }

    if (error) {
        return <Text className="text-center text-red-500">Error. Try again</Text>;

    }


    return (
        <SafeAreaView className="bg-gray-100 flex-1">
            <TouchableWithoutFeedback onPress={handleCloseDropdown}>
                <View className="flex-1">
                    <View className="flex-row items-center space-x-2 px-4 pb-2 py-4">
                        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                            <AntDesign name="search1" size={24} color="black" />
                            <TextInput
                                placeholder="Restaurant, food, or category"
                                className="ml-2 flex-1"
                            />
                            <TouchableOpacity className="flex-row items-center space-x-1 border-l-2 pl-2 border-l-gray-300" onPress={() => navigation.navigate("Address")}>
                                <Feather name="map-pin" size={24} color="black" />
                                <Text className="text-gray-600 ml-2">HCM</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={() => setShowDropDown(!showDropDown)}
                        >
                            <View className="p-3 bg-primary-500 rounded-full ml-2">
                                <Feather name="user" size={18} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    >
                        <Categories />
                        <View className="mt-5">
                            {types.map((item, index) => (
                                <FeatureRow
                                    key={index}
                                    title={item.name}
                                    description={item.description}
                                    restaurants={item.restaurants}
                                />
                            ))}
                        </View>
                    </ScrollView>

                    {showDropDown && (
                        <TouchableWithoutFeedback>
                            <View className="absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
                                <Text className="text-gray-700 text-lg mb-2">Profile</Text>

                                <TouchableOpacity className="border-t-2 border-gray-200 pt-2" onPress={handleLogOut}>
                                    <Text className="text-gray-700 text-lg">Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

export default HomePage

