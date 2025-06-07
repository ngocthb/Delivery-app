import {
    ScrollView,
    Text,
    View
} from "react-native";

import RestaurantCard from "./RestaurantCard";

const FeatureRow = ({ title, description, restaurants }) => {

    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="text-lg font-bold">{title}</Text>
                    <Text className="text-gray-500 text-xs">{description}</Text>
                </View>

            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 8 }}
                className="overflow-visible py-5"
            >
                {(restaurants || []).map((item, index) => {
                    return <RestaurantCard key={index} restaurant={item} />;
                })}
            </ScrollView>
        </View>
    );
};

export default FeatureRow;

