import React from 'react';
import {TailwindProvider} from 'tailwind-rn';
import Router from './Router';
import utilities from './tailwind.json';

const App = () => {
  // const [loaded] = Font.useFonts({
  //   Pretendard: require('./assets/fonts/PretendardVariable.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <>
      <TailwindProvider utilities={utilities}>
        <Router />
      </TailwindProvider>
    </>
    // </SafeAreaView>
  );
};

export default App;
