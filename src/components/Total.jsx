import { selectRestaurantCartTotal } from "../redux/features/cart/cartSelectors";
import { useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
const Total = ({ onPress }) => {
  const route = useRoute();
  const { id } = route.params;
  const totalPrice = useSelector(state => selectRestaurantCartTotal(state, id));
  return (
    <View className="absolute  w-full z-50  px-5  bottom-0 h-1/4 bg-orange-200 rounded-2xl">
      <View className="flex-row justify-between px-4 py-2 mt-2">
        <Text className=" text-lg">Subtotal</Text>
        <Text className=" text-lg">${totalPrice}</Text>
      </View><View className="flex-row justify-between px-4 py-2">
        <Text className=" text-lg">Delivery Fee</Text>
        <Text className=" text-lg">$5</Text>
      </View><View className="flex-row justify-between px-4 py-2">
        <Text className="text-lg font-bold">Order Total</Text>
        <Text className="text-lg font-bold">${totalPrice + 5}</Text>
      </View>

      <TouchableOpacity className="flex-row bg-primary-600  p-4 items-center justify-center rounded-full mt-3" onPress={onPress}>

        <Text className="text-lg font-bold text-white">Place Order</Text>

      </TouchableOpacity>
    </View>
  );
};

export default Total;


