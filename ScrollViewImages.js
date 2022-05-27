import React from 'react';
import { Image, View, ScrollView } from 'react-native';

const image = require('../assets/image1.png');

const ScrollViewImages = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>

    {/* O scrollView é necessário porque em dispositivos móveis o componente View não cria uma área com rolagem automáticamente */}
    {/* Ao rodar uma View na web o relutado terá rolagem, mesmo sem o scrollView, então tome cuidado */}
    <ScrollView horizontal={true}>
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={image} style={{ width: 100, height: 100 }} />
    </ScrollView>
    
  </View>
);

export default ScrollViewImages;