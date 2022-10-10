import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, RouterList} from '../../Router';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeAreaView} from 'react-native-safe-area-context';
import IMP from 'iamport-react-native';
import {IMPConst} from 'iamport-react-native';

export default function Payment() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const tailwind = useTailwind();
  const [pg, setPg] = useState('html5_inicis');
  const [tierCode, setTierCode] = useState(undefined);
  const [method, setMethod] = useState('card');
  const [cardQuota, setCardQuota] = useState(0);
  const [merchantUid, setMerchantUid] = useState(`mid_${new Date().getTime()}`);
  const [name, setName] = useState('아임포트 결제데이터분석');
  const [amount, setAmount] = useState('39000');
  const [buyerName, setBuyerName] = useState('홍길동');
  const [buyerTel, setBuyerTel] = useState('01012341234');
  const [buyerEmail, setBuyerEmail] = useState('example@example.com');
  const [vbankDue, setVbankDue] = useState('');
  const [bizNum, setBizNum] = useState('');
  const [escrow, setEscrow] = useState(false);
  const [digital, setDigital] = useState(false);

  return (
    <SafeAreaView style={tailwind(`bg-light`)}>
      <View style={tailwind('bg-light h-full')}>
        <View style={tailwind('flex-row')}>
          <Pressable
            onPress={() => {
              navigation.navigate(RouterList.Home);
            }}
            style={tailwind('w-1/2 flex-col items-center justify-center py-3')}>
            <Text>네이버 지도 테스트</Text>
          </Pressable>

          <View style={tailwind('flex-col items-center justify-center py-3')}>
            <Text>|</Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate(RouterList.Payment);
            }}
            style={tailwind('w-1/2 flex-col items-center justify-center py-3')}>
            <Text>결제 테스트</Text>
          </Pressable>
        </View>
        <View style={tailwind('w-full h-full')}>
          <IMP.Payment
            userCode="fds"
            tierCode={'ADD'}
            loading={<Text>로딩</Text>}
            data={{
              pg,
              pay_method: method,
              currency: undefined,
              notice_url: undefined,
              display: undefined,
              merchant_uid: merchantUid,
              name,
              amount,
              app_scheme: 'exampleforrn',
              tax_free: undefined,
              buyer_name: buyerName,
              buyer_tel: buyerTel,
              buyer_email: buyerEmail,
              buyer_addr: undefined,
              buyer_postcode: undefined,
              custom_data: undefined,
              vbank_due: undefined,
              digital: undefined,
              language: undefined,
              biz_num: undefined,
              customer_uid: undefined,
              naverPopupMode: undefined,
              naverUseCfm: undefined,
              naverProducts: undefined,
              m_redirect_url: IMPConst.M_REDIRECT_URL,
              niceMobileV2: true,
              escrow,
            }}
            callback={response => console.log(response)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
