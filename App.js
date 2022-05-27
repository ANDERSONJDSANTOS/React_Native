import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ScrollViewImages from './components/ScrollViewImages.js'
import Contador from './components/Contador.js'
import Quadrado from './components/Quadrado.js'
import ListaQuadrados from './components/ListaQuadrados.js'
import AssetExample from './components/AssetExample.js';
import AdicionarCor from'./components/AdiconarCor.js';

// Lembre de importar todos os componentes que você irá utilizar

export default function App() {
  return (
    <View style={styles.container}>
      <AdicionarCor/>
      <ListaQuadrados/>
      {/*
      <Quadrado color='blue'/>
      <Contador />
      <ScrollViewImages />
      <AssetExample/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
