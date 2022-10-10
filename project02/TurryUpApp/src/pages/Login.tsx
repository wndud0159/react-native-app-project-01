import {View, Text, TextInput, Pressable, Platform} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTailwind} from 'tailwind-rn/dist';
import Header from '../components/Header';
import {RouterList} from '../../Router';
import CircleCancel from '../assets/svg/cicle-cancel.svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useKeyboardEvent from '../hooks/useKeyboardEvent';

export default function Login() {
  const tailwind = useTailwind();
  const {isKeyboardActivate, keyboardHeight} = useKeyboardEvent();

  console.log(isKeyboardActivate, keyboardHeight);

  // let kHeight = `h-[${keyboardHeight}px]`;

  return (
    <>
      <SafeAreaView style={tailwind('bg-background relative')} />
      <Header routerList={RouterList.Start} />
      <KeyboardAwareScrollView
        style={tailwind('bg-blue-200 h-full pb-[20px]')}
        extraScrollHeight={Platform.OS === 'ios' ? 0 : 0}
        extraHeight={300}
        resetScrollToCoords={{x: 0, y: 0}}
        scrollEnabled={true}
        enableOnAndroid={true}
        keyboardOpeningTime={0}
        keyboardShouldPersistTaps={'handled'}>
        <View style={tailwind('px-[30px]')}>
          <View>
            <Text
              style={tailwind(
                'leading-[36] text-[24px] font-[700]',
              )}>{`휴대폰 번호로
로그인/회원가입 하기`}</Text>
            <Text
              style={tailwind(
                'text-[13px] font-[500] mt-2',
              )}>{`휴대폰 번호는 안전하게 보관되며 공개되지 않아요`}</Text>
          </View>
        </View>
        <View style={tailwind('mt-[37px] px-[30px]')}>
          <View>
            <Text
              style={tailwind(
                'text-[13px] font-[700] text-[#0066FF]',
              )}>{`휴대폰 번호`}</Text>
            <View
              style={tailwind(
                'mt-[6px] relative flex flex-row w-full h-[48px] border-b-2 border-gray-500',
              )}>
              <TextInput
                style={tailwind('  font-[400] text-[16px] w-full')}
                placeholder="휴대폰 번호를 입력해주세요."
                keyboardType="number-pad"
                maxLength={11}
              />
              <Pressable style={tailwind('py-[15px] absolute right-[15px]')}>
                <CircleCancel style={tailwind('flex-1')} />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={tailwind('mt-[37px] px-[30px]')}>
          <View>
            <Text
              style={tailwind(
                'text-[13px] font-[700] text-[#0066FF]',
              )}>{`휴대폰 번호`}</Text>
            <View
              style={tailwind(
                'mt-[6px] relative flex flex-row w-full h-[48px] border-b-2 border-gray-500',
              )}>
              <TextInput
                style={tailwind('  font-[400] text-[16px] w-full')}
                placeholder="휴대폰 번호를 입력해주세요."
                keyboardType="number-pad"
                maxLength={11}
              />
              <Pressable style={tailwind('py-[15px] absolute right-[15px]')}>
                <CircleCancel style={tailwind('flex-1')} />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={tailwind('mt-[37px] px-[30px]')}>
          <View>
            <Text
              style={tailwind(
                'text-[13px] font-[700] text-[#0066FF]',
              )}>{`휴대폰 번호`}</Text>
            <View
              style={tailwind(
                'mt-[6px] relative flex flex-row w-full h-[48px] border-b-2 border-gray-500',
              )}>
              <TextInput
                style={tailwind('  font-[400] text-[16px] w-full')}
                placeholder="휴대폰 번호를 입력해주세요."
                keyboardType="number-pad"
                maxLength={11}
              />
              <Pressable style={tailwind('py-[15px] absolute right-[15px]')}>
                <CircleCancel style={tailwind('flex-1')} />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={tailwind('mt-[37px] px-[30px]')}>
          <View>
            <Text
              style={tailwind(
                'text-[13px] font-[700] text-[#0066FF]',
              )}>{`휴대폰 번호`}</Text>
            <View
              style={tailwind(
                'mt-[6px] relative flex flex-row w-full h-[48px] border-b-2 border-gray-500',
              )}>
              <TextInput
                style={tailwind('  font-[400] text-[16px] w-full')}
                placeholder="휴대폰 번호를 입력해주세요."
                keyboardType="number-pad"
                maxLength={11}
              />
              <Pressable style={tailwind('py-[15px] absolute right-[15px]')}>
                <CircleCancel style={tailwind('flex-1')} />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={tailwind('mt-[37px] px-[30px]')}>
          <View>
            <Text
              style={tailwind(
                'text-[13px] font-[700] text-[#0066FF]',
              )}>{`휴대폰 번호`}</Text>
            <View
              style={tailwind(
                'mt-[6px] relative flex flex-row w-full h-[48px] border-b-2 border-gray-500',
              )}>
              <TextInput
                style={tailwind('  font-[400] text-[16px] w-full')}
                placeholder="휴대폰 번호를 입력해주세요."
                keyboardType="number-pad"
                maxLength={11}
              />
              <Pressable style={tailwind('py-[15px] absolute right-[15px]')}>
                <CircleCancel style={tailwind('flex-1')} />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={tailwind('mt-[37px] px-[30px]')}>
          <View>
            <Text
              style={tailwind(
                'text-[13px] font-[700] text-[#0066FF]',
              )}>{`휴대폰 번호`}</Text>
            <View
              style={tailwind(
                'mt-[6px] relative flex flex-row w-full h-[48px] border-b-2 border-gray-500',
              )}>
              <TextInput
                style={tailwind('  font-[400] text-[16px] w-full')}
                placeholder="휴대폰 번호를 입력해주세요."
                keyboardType="number-pad"
                maxLength={11}
              />
              <Pressable style={tailwind('py-[15px] absolute right-[15px]')}>
                <CircleCancel style={tailwind('flex-1')} />
              </Pressable>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View
        style={tailwind(
          `${
            isKeyboardActivate
              ? 'absolute bottom-[291px] w-full  bg-gray-500 h-[70px] border'
              : 'hidden'
          } `,
        )}></View>
    </>
  );
}
