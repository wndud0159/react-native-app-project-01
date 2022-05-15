import {
  ActivityIndicator,
  Alert,
  Pressable,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {Text} from '@rneui/base';
import {useTailwind} from 'tailwind-rn/dist';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';
import axios, {AxiosError} from 'axios';
import Config from 'react-native-config';
import userSlice from '../slices/user';
import {useAppDispatch} from '../store';
import EncryptedStorage from 'react-native-encrypted-storage';

type SignInCreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

export default function SignIn({navigation}: SignInCreenProps) {
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  const changeEmailHandler = useCallback(text => {
    console.log(text);
    setEmail(text);
  }, []);
  const changePasswordHandler = useCallback(text => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(async () => {
    console.log(Config.API_URL);
    if (loading) {
      return;
    }
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    try {
      setLoading(true);
      const response = await axios.post(`${Config.API_URL}/login`, {
        email,
        password,
      });
      console.log(response.data);
      Alert.alert('알림', '로그인 되었습니다.');
      dispatch(
        userSlice.actions.setUser({
          name: response.data.data.name,
          email: response.data.data.email,
          accessToken: response.data.data.accessToken,
        }),
      );
      await EncryptedStorage.setItem(
        'refreshToken',
        response.data.data.refreshToken,
      );
    } catch (error) {
      const errorResponse = (error as AxiosError).response;
      if (errorResponse) {
        Alert.alert('알림', errorResponse.data.message);
      }
    } finally {
      setLoading(false);
    }
  }, [loading, dispatch, email, password]);

  return (
    <View style={tailwind('px-5')}>
      <View style={tailwind('mb-2')}>
        <Text style={tailwind('')}>이메일</Text>
        <TextInput
          style={tailwind('p-0 border-b')}
          onChangeText={changeEmailHandler}
          value={email}
          placeholder="이메일을 입력해주세요."
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          keyboardType="email-address"
          ref={emailRef}
          blurOnSubmit={false}
          clearButtonMode="while-editing"
        />
      </View>
      <View style={tailwind('mb-2')}>
        <Text style={tailwind('')}>비밀번호</Text>
        <TextInput
          style={tailwind('border-b p-0')}
          value={password}
          onChangeText={changePasswordHandler}
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          ref={passwordRef}
          onSubmitEditing={() => {
            onSubmit();
          }}
        />
      </View>
      <View style={tailwind('items-center')}>
        <Pressable
          onPress={onSubmit}
          style={tailwind(
            `items-center px-4 py-3 rounded-lg ${
              email && password ? 'bg-blue-500' : 'bg-gray-500'
            }  mb-2`,
          )}
          disabled={email && password ? false : true}>
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={tailwind('text-white')}>로그인</Text>
          )}
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={tailwind('')}>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
}
