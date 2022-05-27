import React, { useState } from 'react';
import { Button, Text, View, TextInput} from 'react-native';

// O compodente pode receber o parâmetro props, que é um objeto com o valor de todos os atributos que foram configurados no objeto
// neste caso estamos utilizando props para pegar o atributo color utilizado no componente <Quadrado color='green'/>
const Quadrado = (props) => {
  return (
    <View style={{ width:100, height:100, backgroundColor:props.color }}>
    </View>
  );
};

export default Quadrado;