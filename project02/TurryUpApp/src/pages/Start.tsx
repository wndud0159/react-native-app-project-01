import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import Logo from '../assets/svg/logo.svg';
import Tooltip from '../assets/svg/tooltip.svg';
import FastImage from 'react-native-fast-image';
import FadeInOut from 'react-native-fade-in-out';
import {wait} from '../utils/timeout';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, RouterList} from '../../Router';

export default function Start() {
  const tailwind = useTailwind();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const firstVisitHandler = async () => {
      await wait(500);
      setVisible(true);
    };
    firstVisitHandler();
  }, []);

  return (
    <View style={tailwind('relative h-full w-full')}>
      <View style={tailwind('absolute z-40 w-full h-full bg-gray-300')}>
        <FastImage
          source={require('../assets/image/start-background.png')}
          style={tailwind('w-full h-full')}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={tailwind(
          'flex-col items-center absolute z-50  w-full   top-[33%]',
        )}>
        <Logo />
        <View style={tailwind('mt-3 flex-col items-center')}>
          <Text style={tailwind('text-white font-bold text-[22px]')}>
            우리동네 떨이마켓
          </Text>
        </View>
        <View style={tailwind('mt-5 flex-col items-center')}>
          <Text style={tailwind('font-[600] text-[14px] text-white')}>
            지금 내 주위에 어떤 할인이 있는지
          </Text>
          <Text style={tailwind('font-[600] text-[14px] text-white')}>
            서둘러 확인해보세요.
          </Text>
        </View>
      </View>
      <View
        style={tailwind(
          'absolute bottom-[9%] z-50 w-full flex flex-col items-center',
        )}>
        <FadeInOut visible={visible} scale={true}>
          <Tooltip />
        </FadeInOut>
        <Pressable
          onPress={() => {
            navigation.navigate(RouterList.Login);
          }}
          style={tailwind(
            'w-[315px] bg-white h-[52px] mt-1 rounded-[4px] flex flex-col items-center justify-center',
          )}>
          <Text style={tailwind('text-primary font-[600] text-[16px]')}>
            시작하기
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
