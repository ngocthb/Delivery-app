import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddressThunk } from "~/redux/features/address/addressThunk";

const Address = () => {
    const [inputAddress, setInputAddress] = useState("");
    const [coords, setCoords] = useState(null);

    const dispatch = useDispatch();
    const { address, loading, error } = useSelector((state) => state.address);
    const results = address || [];

    const handleSearch = () => {
        if (inputAddress.trim()) {
            dispatch(fetchAddressThunk(inputAddress));
        }
    };

    const handleSelect = (item) => {
        setInputAddress(item.display_name);
        setCoords({
            latitude: parseFloat(item.lat),
            longitude: parseFloat(item.lon),
            displayName: item.display_name,
        });
        dispatch({ type: 'address/clearAddress' });
    };

    if (error) {
        return (
            <SafeAreaView className="flex-1 bg-white pt-4">
                <Text className="text-red-500 text-center">Error Try later</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="flex-1 bg-white px-4 pt-4">
            <View className="flex-row items-center border border-gray-300 rounded-full px-2 py-2">
                <TextInput
                    placeholder="Find your address"
                    value={inputAddress}
                    onChangeText={(text) => setInputAddress(text)}
                    onSubmitEditing={handleSearch}
                    className="flex-1 text-base"
                />
                <TouchableOpacity onPress={handleSearch} className="ml-2 bg-primary-500 p-2 rounded-full">
                    <Feather name="search" size={20} color="white" />
                </TouchableOpacity>
            </View>

            {loading && <ActivityIndicator className="mt-4" />}



            {results.length > 0 && (
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.place_id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => handleSelect(item)}
                            className="p-3 border-b border-gray-200"
                        >
                            <Text className="text-sm">{item.display_name}</Text>
                        </TouchableOpacity>
                    )}
                    className="absolute top-32 left-4 right-4 bg-white rounded-md max-h-60 z-50 shadow-lg"
                />
            )}

            {coords && (
                <View className="flex-1 mt-4 rounded-xl overflow-hidden">
                    <MapView
                        style={{ flex: 1 }}
                        region={{
                            latitude: coords.latitude,
                            longitude: coords.longitude,
                            latitudeDelta: 0.003,
                            longitudeDelta: 0.003,
                        }}
                        showsUserLocation
                    >
                        <Marker
                            coordinate={{
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                            }}
                            title="Selected Address"
                            description={coords.displayName}
                        />
                    </MapView>
                </View>
            )
            }
            <View className="absolute bottom-8 w-full z-50 px-5">
                <TouchableOpacity
                    className="flex-row bg-primary-600 p-4 items-center justify-center rounded-full"
                >
                    <Text className="text-lg font-bold text-white">Select this address</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

export default Address;
