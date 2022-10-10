import {View, Dimensions, Text, Pressable} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeAreaView} from 'react-native-safe-area-context';
import NaverMapView, {Circle, Marker} from 'react-native-nmap';
import Postcode from '@actbase/react-daum-postcode';
import axios from 'axios';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, RouterList} from '../../Router';

export default function Home() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const tailwind = useTailwind();
  const [P0, setP1] = useState<{latitude: number; longitude: number}>({
    latitude: 37.56286560532598,
    longitude: 126.9741303494414,
  });
  /**
   * 위도경도 계산
   * 위도 1Km = 1 / 109.958489129649955 // 0.00909434103647
   * 경도 1Km = 1 / 88.74 // 0.011268875366238
   * 현위치
   * 위도 37.56286560532598
   * 경도 126.9741303494414
   * 1km 범위 안
   * 위도
   * < 37.57195994636245
   * > 37.55377126428951
   * 경도
   * < 126.985399224807638
   * > 126.962861474075162
   * 대각
   * 126.96016693731815
   * 37.556427886700064
   *
   * 범위 1030이 1km
   */
  const P1 = {latitude: 37.50553243206484, longitude: 126.90342703906947};
  const P2 = {latitude: 37.50172290879935, longitude: 126.8996867639787};
  const P3 = {latitude: 37.5037334189326, longitude: 126.89148114504661};

  const changeLocationHandler = useCallback(async (address: string) => {
    try {
      const response = await axios.get(
        `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${address}`,
        {
          headers: {
            'X-NCP-APIGW-API-KEY-ID': 'p1frax9zqz',
            'X-NCP-APIGW-API-KEY': 'zDXK8OwqHimK6qBbmGwa76RjArsWJpmsSK7HLeeN',
          },
        },
      );
      console.log(response.data.addresses[0].x);
      setP1({
        latitude: +response.data.addresses[0].y,
        longitude: +response.data.addresses[0].x,
      });
    } catch (e) {
      console.log('error', e);
    }
  }, []);

  console.log(navigation.getState());

  return (
    <SafeAreaView style={tailwind(`bg-light`)}>
      <View style={tailwind('bg-light h-full')}>
        <View style={tailwind('flex-row')}>
          <Pressable
            onPress={() => {
              navigation.navigate(RouterList.Home);
            }}
            style={tailwind('w-1/2 flex-col items-center justify-center py-3')}>
            <Text>홈</Text>
          </Pressable>

          <View style={tailwind('flex-col items-center justify-center py-3')}>
            <Text>|</Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate(RouterList.Payment);
            }}
            style={tailwind('w-1/2 flex-col items-center justify-center py-3')}>
            <Text>결제dddd</Text>
          </Pressable>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 200,
            marginTop: 10,
          }}>
          {/*@ts-ignore */}
          <NaverMapView
            style={{width: '100%', height: '100%'}}
            // showsMyLocationButton={true}
            zoomControl={true}
            center={{...P0, zoom: 13}}
            // onTouch={() => {
            //   console.log('check');
            // }}
            // onCameraChange={e =>
            //   console.log('onCameraChange', JSON.stringify(e))
            // }
            onMapClick={e => console.log('onMapClick', JSON.stringify(e))}>
            <Marker
              width={30}
              height={30}
              coordinate={P0}
              caption={{text: '내 위치'}}
              onClick={() => console.log('onClick! p0')}
            />
            <Marker
              width={30}
              height={30}
              coordinate={P1}
              pinColor="blue"
              caption={{text: '교촌'}}
              onClick={() => console.log('onClick! p1')}
            />

            <Marker
              width={30}
              height={30}
              coordinate={P2}
              pinColor="blue"
              caption={{text: '비비큐'}}
              onClick={() => console.log('onClick! p2')}
            />

            <Marker
              width={30}
              height={30}
              coordinate={P3}
              pinColor="blue"
              caption={{text: '비에이치씨'}}
              onClick={() => console.log('onClick! p3')}
            />
            {/* <Path
              coordinates={[P0, P1]}
              onClick={() => console.log('onClick! path')}
              width={3}
            /> */}
            {/* <Polyline
              coordinates={[P1, P2]}
              onClick={() => console.log('onClick! polyline')}
              strokeColor={'white'}
            /> */}
            <Circle
              coordinate={P0}
              color={'rgba(1,0,0,0.1)'}
              radius={1030}
              onClick={() => console.log('onClick! circle')}
            />
            {/* <Polygon
              coordinates={[P0, P1, P2]}
              color={`rgba(0, 0, 0, 0.5)`}
              onClick={() => console.log('onClick! polygon')}
            /> */}
          </NaverMapView>
          <Postcode
            style={{width: 320, height: 320}}
            onError={() => {
              console.log('error');
            }}
            jsOptions={{animation: true}}
            onSelected={data => {
              changeLocationHandler(data.address);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
