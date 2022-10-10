import {View, Pressable} from 'react-native';
import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import LeftArrow from '../assets/svg/left-arrow.svg';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, RouterList} from '../../Router';

interface Props {
  routerList?: RouterList;
  paramsId?: {};
}

export default function Header({routerList = 'Home', paramsId = {}}: Props) {
  const tailwind = useTailwind();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View
      style={tailwind(
        'h-[60px] w-full flex flex-col items-start justify-center',
      )}>
      <Pressable
        style={tailwind('p-[13px]')}
        onPress={() => {
          if (paramsId) {
            navigation.navigate(routerList, paramsId);
          } else {
            navigation.navigate(routerList);
          }
        }}>
        <LeftArrow style={tailwind('')} />
      </Pressable>
    </View>
  );
}
