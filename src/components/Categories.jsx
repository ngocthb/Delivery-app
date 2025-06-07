
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesThunk } from "../redux/features/categories/categoriesThunk";

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(1);
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategoriesThunk());
    }, [dispatch]);

    if (loading) {
        return (
            <View className="mt-2">
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                >
                    {Array.from({ length: 6 }).map((_, index) => (
                        <View
                            key={index}
                            className="flex justify-center items-center mr-6 mt-2"
                        >
                            <View className="p-2 rounded-full bg-gray-200 animate-pulse">
                                <View className="w-10 h-10 rounded-full bg-gray-300" />
                            </View>
                            <View className="w-12 h-3 bg-gray-300 rounded-md mt-1 animate-pulse" />
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }

    if (error) {
        return <Text className="text-center text-red-500">Error. Try again</Text>;
    }


    return (
        <View className="mt-2 ">
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
            >
                {categories.map((category, index) => {
                    const isActive = activeCategory === category._id;
                    const btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
                    const textClass = isActive
                        ? "font-semibold text-gray-800"
                        : "text-gray-500";

                    return (
                        <View
                            key={index}
                            className="flex justify-center items-center mr-6 mt-2"
                        >
                            <TouchableOpacity
                                className={`p-2 rounded-full shadow ${btnClass}`}
                                onPress={() => setActiveCategory(category._id)}
                            >
                                <Image
                                    source={category.image}
                                    className="w-10 h-10 rounded-full"
                                    resizeMode="cover"
                                />
                            </TouchableOpacity>
                            <Text className={`text-sm mt-1 ${textClass}`}>
                                {category.name}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Categories;
