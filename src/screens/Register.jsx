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

const Register = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const passwordInputRef = useRef(null);
    const confirmPasswordInputRef = useRef(null);
    const navigation = useNavigation();

    const handleRegister = () => {
        if (!phone || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
        if (!passwordRegex.test(password)) {
            Alert.alert('Invalid Password', 'Password must contain at least one uppercase letter and one number.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        Alert.alert('Register Info', `Phone: ${phone}`);

    };

    return (
        <SafeAreaView className="flex-1 bg-orange-100">
            <KeyboardAvoidingView
                className="flex-1"
                behavior={Platform.OS === 'ios' ? 'padding' : 'undefined'}

            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View className="flex-1 items-center px-6 pt-4">
                        <Image
                            source={require("../../assets/images/register.webp")}
                            className="w-full h-80 mb-4"
                            resizeMode="contain"
                        />

                        <Text className="text-2xl font-bold mb-2 text-center">
                            Join DeliFood - Eat happy.
                        </Text>
                        <Text className="text-sm text-center text-gray-500 mb-6">
                            From our kitchen to your doorstep.
                        </Text>

                        {/* Email */}
                        <Text className="text-base font-semibold mb-1 w-full">Phone Number</Text>
                        <TextInput
                            value={phone}
                            onChangeText={setPhone}
                            className="bg-gray-100 rounded-md px-4 py-3 text-base text-gray-700 mb-4 w-full"
                            placeholder="Enter your phone number"
                            placeholderTextColor="#999"
                            keyboardType="phone-pad"
                            autoCapitalize="none"
                            returnKeyType="next"
                            blurOnSubmit={false}
                            onSubmitEditing={() => {
                                if (passwordInputRef.current) passwordInputRef.current.focus();
                            }}
                        />


                        {/* Password */}
                        <Text className="text-base font-semibold text-gray-800 mb-1 w-full">Password</Text>
                        <View className="relative mb-4 w-full">
                            <TextInput
                                ref={passwordInputRef}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!isPasswordVisible}
                                className="bg-gray-100 rounded-md px-4 pr-10 py-3 text-base text-gray-700"
                                placeholder="••••••••••••"
                                placeholderTextColor="#999"
                                onSubmitEditing={() => {
                                    if (confirmPasswordInputRef.current) confirmPasswordInputRef.current.focus();
                                }}
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

                        {/* Confirm Password */}
                        <Text className="text-base font-semibold text-gray-800 mb-1 w-full">Confirm Password</Text>
                        <View className="relative mb-6 w-full">
                            <TextInput
                                ref={confirmPasswordInputRef}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!isConfirmPasswordVisible}
                                className="bg-gray-100 rounded-md px-4 pr-10 py-3 text-base text-gray-700"
                                placeholder="••••••••••••"
                                placeholderTextColor="#999"
                                onSubmitEditing={handleRegister}
                            />
                            <TouchableOpacity
                                onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                className="absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <Feather
                                    name={isConfirmPasswordVisible ? 'eye' : 'eye-off'}
                                    size={16}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Register Button */}
                        <TouchableOpacity
                            className="bg-primary-600 p-4 rounded-full items-center justify-center w-full mb-4"
                            onPress={handleRegister}
                        >
                            <Text className="text-lg font-bold text-white text-center">
                                Register
                            </Text>
                        </TouchableOpacity>

                        {/* Switch to Login */}
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text className="text-sm text-center text-gray-500">
                                Already have an account?{' '}
                                <Text className="text-orange-500 font-semibold">Login</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Register;
