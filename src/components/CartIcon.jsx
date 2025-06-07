
import { selectRestaurantCartTotal, selectTotalItems } from "../redux/features/cart/cartSelectors";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CartScreen from "./CartScreen";
const CartIcon = () => {
  const route = useRoute();
  const { id } = route.params;
  const [openModal, setOpenModal] = React.useState(false);
  const handleCloseModal = () => setOpenModal(false);


  const totalPrice = useSelector(state => selectRestaurantCartTotal(state, id));

  const totalItems = useSelector(state => selectTotalItems(state));

  return (
    <>
      {totalItems > 0 && (
        <View className="absolute bottom-8 w-full z-50 px-5">
          <TouchableOpacity
            className="flex-row bg-primary-600 p-4 items-center justify-between rounded-full"
            onPress={() => setOpenModal(true)}
          >
            <View className="bg-white rounded-full w-8 h-8 items-center justify-center">
              <Text className="text-primary-500 font-bold">{totalItems}</Text>
            </View>
            <Text className="text-lg font-bold text-white">View Cart</Text>
            <Text className="text-lg font-bold text-white">${totalPrice}</Text>
          </TouchableOpacity>
        </View>
      )}

      <CartScreen isOpen={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default CartIcon;
