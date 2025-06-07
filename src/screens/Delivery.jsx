import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from 'react-redux';
const Delivery = () => {
    const navigation = useNavigation();
    const { restaurant, loading, error } = useSelector(state => state.restaurant);

    if (loading) {
        return (
            <View className="flex-1 bg-gray-100">
                <View className="flex-1 bg-gray-300 animate-pulse" />

                <View className="absolute top-4 left-4 bg-white w-10 h-10 rounded-full shadow justify-center items-center" />

                <View className="absolute bottom-0 left-0 right-0 bg-white px-6 py-4 flex-row justify-between items-center">
                    <View className="flex-1 gap-3">
                        <View className="w-32 h-4 bg-gray-300 rounded-md" />
                        <View className="w-48 h-6 bg-gray-300 rounded-md" />
                        <View className="w-40 h-4 bg-gray-300 rounded-md" />
                    </View>
                    <View className="w-40 h-36 bg-gray-300 rounded-md" />
                </View>
            </View>
        );
    }
    if (error) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text className="text-lg font-bold text-red-500">Error: {error}</Text>
            </View>
        );
    }


    return (
        <View className="flex-1">
            <MapView
                style={styles.map}
                region={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}

                mapType='standard'
                showsUserLocation={true}
            >
                <Marker coordinate={{ latitude: restaurant.lat, longitude: restaurant.lng }} title={restaurant.name} description={restaurant.description} />
            </MapView>
            <SafeAreaView className="absolute left-6">
                <TouchableOpacity
                    className="bg-white p-2 rounded-full shadow top-4 w-10 h-10 justify-center items-center"
                    onPress={() => navigation.navigate('Home')} // Replace with actual restaurant ID
                >
                    <AntDesign name="arrowleft" size={20} color="#FF8C00" />
                </TouchableOpacity>
            </SafeAreaView>
            <View className="absolute flex-row justify-between items-center bottom-0 left-0 right-0 bg-white px-6 py-2">
                <View className="flex-1 gap-3">
                    <Text className="text-lg font-bold">Delivering now!</Text>
                    <Text className="text-2xl font-semibold">20 - 30 Minutes</Text>
                    <Text className="text-gray-500">Almost there! Get ready to eat.</Text>
                </View>
                <View>
                    <Image source={require('../../assets/images/delivery.webp')} className="w-40 h-36" resizeMode='contain' />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { flex: 1 },
});

export default Delivery;
