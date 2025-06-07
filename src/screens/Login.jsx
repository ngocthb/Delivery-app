import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { useRef, useState } from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const passwordInputRef = useRef(null);

    const navigation = useNavigation();

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        Alert.alert('Login Info', `Email: ${email}\nPassword: ${password}`);
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView className="flex-1 bg-orange-100">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'}
            // keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View className="items-center px-6 ">
                        <Image
                            source={require("../../assets/images/login.webp")}
                            className="w-full h-72 mb-4"
                            resizeMode="contain"
                        />

                        <Text className="text-2xl font-bold mb-2 text-center">
                            Join DeliFood - Eat happy.
                        </Text>
                        <Text className="text-sm text-center text-gray-500 mb-6">
                            From our kitchen to your doorstep.
                        </Text>

                        {/* Email */}
                        <Text className="text-base font-semibold mb-1 w-full">Email</Text>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            className="bg-gray-100 rounded-md px-4 py-3 text-base text-gray-700 mb-4 w-full"
                            placeholder="example@gmail.com"
                            placeholderTextColor="#999"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            onSubmitEditing={() => {
                                if (passwordInputRef.current) {
                                    passwordInputRef.current.focus();
                                }
                            }}
                        />

                        {/* Password */}
                        <Text className="text-base font-semibold text-gray-800 mb-1 w-full">Password</Text>
                        <View className="relative mb-2 w-full">
                            <TextInput
                                ref={passwordInputRef}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!isPasswordVisible}
                                className="bg-gray-100 rounded-md px-4 pr-10 py-3 text-base text-gray-700"
                                placeholder="••••••••••••"
                                placeholderTextColor="#999"
                                onSubmitEditing={handleLogin}
                            />
                            <TouchableOpacity
                                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <Feather
                                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                                    size={16}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity className="mb-4 self-end">
                            <Text className="text-orange-500 font-semibold text-sm">Forgot password?</Text>
                        </TouchableOpacity>

                        {/* Login Button */}
                        <TouchableOpacity
                            className="bg-primary-600 p-4 rounded-full items-center justify-center w-full mb-4"
                            onPress={handleLogin}
                        >
                            <Text className="text-lg font-bold text-white text-center">
                                Login
                            </Text>
                        </TouchableOpacity>

                        {/* Switch to Register */}
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text className="text-sm text-center text-gray-500">
                                Don't have an account yet?{' '}
                                <Text className="text-orange-500 font-semibold">Register</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
