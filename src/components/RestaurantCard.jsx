import Feather from "@expo/vector-icons/Feather";

import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("Restaurant", {
        id: restaurant._id.toString()
      })}
    >
      <View className="mr-6 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={restaurant.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{restaurant.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Image
              source={require("../../assets/images/star.png")}
              className="h-4 w-4"
              alt="star"
            />
            <Text className="text-xs">
              <Text className="text-green-700">{restaurant.stars}</Text>
              <Text className="text-gray-700">
                {" "} - {" "}
                {restaurant.reviews} Reviews
                <Text className="font-semibold">{restaurant.category}</Text>
              </Text>
            </Text>
          </View>
          <View className="flex-row items-center space-x-1 ">
            <Feather name="map-pin" size={8} color="black" className="mx-1" />
            <Text className="text-gray-700 text-xs">
              Nearby · {restaurant.address.length > 25
                ? restaurant.address.slice(0, 25) + "..."
                : restaurant.address}
            </Text>

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
