import { selectCart } from "../redux/features/cart/cartSelectors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import Total from "./Total";
const CartScreen = ({ isOpen, onClose }) => {

  const navigation = useNavigation();
  const cart = useSelector(state => selectCart(state));

  useEffect(() => {
    if (!cart || cart.length === 0) {
      onClose();

    }
  }, [cart]);

  const handleNavigation = () => {
    onClose();
    navigation.navigate("OrderPrepare");
  }
  return (
    <>{isOpen && (<View className="absolute inset-0 bg-black/40 justify-end">

      <View className="bg-white rounded-t-3xl h-[93%]">
        <View className="p-4">
          <TouchableOpacity
            className="bg-primary-500 p-2 rounded-full shadow absolute top-6 left-4 w-10 h-10 justify-center items-center z-50"
            onPress={onClose}
          >
            <AntDesign name="arrowleft" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-2xl text-center font-bold">Your Cart</Text>
          <Text className="text-center text-gray-500">Papa John's Pizza</Text>
        </View>

        {/* Delivery Info */}
        <View className="bg-orange-100">
          <View className="flex-row justify-between items-center px-3">
            <Image
              source={require("../../assets/images/delivery.png")}
              className="w-24 h-24"
            />
            <Text className="text-lg">Deliver in 20-30 minutes</Text>
            <TouchableOpacity onPress={() => alert("Change Address")}>
              <Text className="font-semibold text-primary-500">Change</Text>
            </TouchableOpacity>
          </View>
        </View>


        <CartDetails />
      </View>


      <Total onPress={handleNavigation} />
    </View>)}</>
  );
};

export default CartScreen;
