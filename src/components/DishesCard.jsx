import { selectCartFlatList, selectCartItemById } from "../redux/features/cart/cartSelectors";
import { decreaseQuality, increaseQuality } from "../redux/features/cart/cartSlice";
import { updateCartThunk } from "../redux/features/cart/cartThunks";
import store from "../redux/store";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const DishesCard = ({ dish }) => {

  const cartItem = useSelector((state) => selectCartItemById(state, dish._id))?.quantity || 0;
  const { restaurant, loading, error } = useSelector((state) => state.restaurant);

  const res = {
    restaurant_id: restaurant._id,
    restaurant_name: restaurant.name,
    restaurant_image: restaurant.image,
  };
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuality({ id: dish._id, price: dish.price, name: dish.name, image: dish.image, res: res }));
    const carts = selectCartFlatList(store.getState());
    dispatch(updateCartThunk(carts));

  }
  const handleDecrease = () => {

    dispatch(decreaseQuality({ id: dish._id, price: dish.price, name: dish.name, image: dish.image, res: res }));
    const carts = selectCartFlatList(store.getState());
    dispatch(updateCartThunk(carts));

  }

  if (loading) {
    return (
      <View className="p-2">
        <View className="flex-row items-center p-4 bg-gray-200 rounded-3xl animate-pulse">
          <View className="w-24 h-24 bg-gray-300 rounded-xl mr-4" />
          <View className="flex-1">
            <View className="w-32 h-6 bg-gray-300 rounded-md mb-2" />
            <View className="w-48 h-4 bg-gray-300 rounded-md mb-2" />
            <View className="flex-row items-center justify-between">
              <View className="w-16 h-6 bg-gray-300 rounded-md" />
              <View className="flex-row items-center gap-2">
                <View className="w-8 h-8 bg-gray-400 rounded-full" />
                <View className="w-8 h-8 bg-gray-400 rounded-full" />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View className="p-4">
        <Text className="text-red-500 text-center">Error loading dish details. Please try again.</Text>
      </View>
    );
  }



  return (
    <View className="bg-white rounded-3xl p-4 mb-6 w-full shadow-lg ">
      <View className="flex-row items-center ">
        <Image source={dish.image} className="h-24 w-24 rounded-xl" />
        <View className="ml-4 flex-1">
          <Text className="text-lg font-bold">{dish.name}</Text>
          <Text className="text-gray-500 mt-1">{dish.description}</Text>
          <View className="flex-row items-center justify-between mt-2">
            <Text className="text-lg font-semibold">${dish.price}</Text>

            <View className="flex-row items-center gap-4">
              <TouchableOpacity
                onPress={handleDecrease}
              >
                <Text className="w-8 h-8 rounded-full text-white bg-primary-500 align-middle text-center text-lg font-bold">
                  -
                </Text>
              </TouchableOpacity>
              <Text className="text-lg w-8 text-center">{cartItem}</Text>
              <TouchableOpacity onPress={handleIncrease}>
                <Text className="w-8 h-8 rounded-full text-white bg-primary-500 align-middle text-center text-lg font-bold">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishesCard;
