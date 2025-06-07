import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-orange-100 ">
      <Image
        source={require('../../assets/images/banner.webp')}
        className="h-56 w-screen"
        resizeMode="contain"
      />
      <Text className="mb-4 px-4 text-center text-xl text-gray-600">Tasty - Fast - Easy. </Text>
      <Text className="text-2xl font-bold">That’s DeliFood</Text>

      <View className="absolute bottom-10 w-full px-8">
        <TouchableOpacity className="bg-primary-600 items-center justify-center rounded-full p-4" onPress={() => navigation.navigate('Login')}>
          <Text className="text-lg font-bold text-white">Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
