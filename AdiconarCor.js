import React, { useState } from 'react';
import { Button, Text, View, TextInput} from 'react-native';
import Quadrado from './Quadrado'

const ListaQuadrados = (props) => {
  
  const [cores, setCores] = useState([]);
  const [cor, setCor] = useState('');

  //const cores = ['red', 'blue', 'green'];

  const adicionarCor = () => {
    setCores(lista => {
      lista.push(cor);
      setCor('');
      return lista;
      });
  }

  return (
    <View>
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={corNova => setCor(corNova)}
      />
      <Button 
        title='Adicionar Cor' 
        onPress={adicionarCor}/>  
      <View>
        {cores.map((cor) => <Quadrado color={cor}/>)}
      </View>
    </View>
  );
};

export default ListaQuadrados;