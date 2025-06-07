import CartIcon from "../components/CartIcon";
import DishesCard from "../components/DishesCard";
import { fetchRestaurantByIdThunk } from "../redux/features/restaurants/restaurantsThunk";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
// export const featured = {
//   id: "adqe1",
//   title: "Hot and Spicy",
//   description: "Soft and tender fried chicken",
//   restaurants: [
//     {
//       id: "dihaud1",
//       name: "Papa Johns",
//       image: { uri: "https://picsum.photos/64/64" },
//       description: "Hot and spicy pizzas",
//       lng: 38.2145602,
//       lat: -85.5324269,
//       address: "434 second street",
//       stars: 4,
//       reviews: "4.4k",
//       category: "Fast Food",
//       dishes: [
//         {
//           id: "12h",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "1gs2h",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "1sgsgwt2h",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "1wth2h",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "h21fj",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "afhaudh1",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//       ],
//     },
//     {
//       id: "dihaud1",
//       name: "Papa Johns",
//       image: { uri: "https://picsum.photos/64/64" },
//       description: "Hot and spicy pizzas",
//       lng: 38.2145602,
//       lat: -85.5324269,
//       address: "434 second street",
//       stars: 4,
//       reviews: "4.4k",
//       category: "Fast Food",
//       dishes: [
//         {
//           id: "12h",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "h21fj",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "afhaudh1",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//       ],
//     },
//     {
//       id: "dihaud1",
//       name: "Papa Johns",
//       image: { uri: "https://picsum.photos/64/64" },
//       description: "Hot and spicy pizzas",
//       lng: 38.2145602,
//       lat: -85.5324269,
//       address: "434 second street",
//       stars: 4,
//       reviews: "4.4k",
//       category: "Fast Food",
//       dishes: [
//         {
//           id: "12h",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "h21fj",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "afhaudh1",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//       ],
//     },
//     {
//       id: "dihaud1",
//       name: "Papa Johns",
//       image: { uri: "https://picsum.photos/64/64" },
//       description: "Hot and spicy pizzas",
//       lng: 38.2145602,
//       lat: -85.5324269,
//       address: "434 second street",
//       stars: 4,
//       reviews: "4.4k",
//       category: "Fast Food",
//       dishes: [
//         {
//           id: "12h",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "h21fj",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//         {
//           id: "afhaudh1",
//           name: "Pizza",
//           description: "Cheezy garlic pizza",
//           price: 10,
//           image: { uri: "https://picsum.photos/64/64" },
//         },
//       ],
//     },
//   ],
// };

const Restaurant = () => {
    const route = useRoute();
    const { id } = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestaurantByIdThunk(id));

    }, [dispatch, id]);



    const { restaurant, loading, error } = useSelector((state) => state.restaurant);

    if (loading) {
        return (
            <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 80 }}>
                <View className="w-full h-72 bg-gray-300 animate-pulse" />

                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-gray-100 mt-[-30px]"
                >
                    <View className="p-5">
                        <View className="w-48 h-8 bg-gray-300 rounded-md animate-pulse mb-3" />

                        <View className="flex-row gap-3 items-center space-x-2 mb-2">
                            <View className="w-4 h-4 bg-gray-300 rounded-full animate-pulse" />
                            <View className="w-12 h-4 bg-gray-300 rounded-md animate-pulse" />
                            <View className="w-24 h-4 bg-gray-300 rounded-md animate-pulse" />
                        </View>

                        <View className="flex-row gap-3 items-center space-x-2 mb-2">
                            <View className="w-4 h-4 bg-gray-300 rounded-md animate-pulse" />
                            <View className="w-32 h-4 bg-gray-300 rounded-md animate-pulse" />
                        </View>

                        <View className="w-full h-20 bg-gray-300 rounded-md animate-pulse mt-4" />
                    </View>

                    <Text className="text-2xl font-bold px-5 mt-4">Menu</Text>
                    <View className="px-5 py-3 flex-row flex-wrap gap-4">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <View key={index} className="w-full h-24 bg-gray-300 rounded-xl animate-pulse mb-3" />
                        ))}
                    </View>
                </View>
            </ScrollView>
        );
    }

    if (error) {
        return <Text className="text-center text-red-500">Error. Try again</Text>;
    }


    return (
        <View className="flex-1">
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                <View className="relative">
                    <Image
                        className="w-full h-72"
                        source={restaurant.image}
                        resizeMode="cover"
                    />
                    <SafeAreaView style={{ position: "absolute", left: 12 }}>
                        <TouchableOpacity
                            className="bg-white p-2 rounded-full shadow top-4 w-10 h-10 justify-center items-center"
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="arrowleft" size={20} color="#FF8C00" />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>

                <View
                    style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
                    className="bg-gray-50 mt-[-30px]"
                >
                    <View className="p-5">
                        <Text className="text-4xl font-bold mt-3">{restaurant.name}</Text>

                        <View className="mt-2 flex-row items-center">
                            <Image
                                source={require("../../assets/images/star.png")}
                                className="h-4 w-4"
                            />
                            <Text className=" ml-2">{restaurant.stars}</Text>
                            <Text className="text-gray-500 ml-2">
                                ({restaurant.reviews} reviews)
                            </Text>
                            <Text className="font-semibold  ml-2">
                                {restaurant.category}
                            </Text>
                        </View>

                        <View className="mt-2 flex-row items-center">
                            <Feather name="map-pin" size={16} color="black" />
                            <Text className="text-gray-700 ml-2">Nearby - {restaurant.address}</Text>
                        </View>

                        <Text className="mt-4 text-gray-700">{restaurant.description}</Text>
                    </View>

                    <Text className="text-2xl font-bold px-5">Menu</Text>
                    <View className="px-5 py-3 space-x-3 flex-wrap">
                        {(restaurant.dishes || []).map((dish) => (
                            <DishesCard key={dish._id} dish={dish} />
                        ))}
                    </View>
                </View>
            </ScrollView >

            <CartIcon />
        </View >
    );
};

export default Restaurant;
