import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/common/store';
import {
  MapBoard,
  MenuContainer,
  ToiletInfo,
} from './src/components/mainComponents';

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  flexWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0F0',
  },
});

function FlexWrapper() {
  return (
    <View style={[styles.flexWrapper]}>
      <MapBoard />
      <ToiletInfo />
    </View>
  );
}

interface Props {}

const App = ({}: Props) => (
  <Provider store={store}>
    <SafeAreaView style={[styles.backgroundStyle]}>
      <FlexWrapper />
      <MenuContainer />
    </SafeAreaView>
  </Provider>
);

export default App;