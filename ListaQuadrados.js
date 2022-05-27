import React, { useState } from 'react';
import { Button, Text, View, TextInput} from 'react-native';
import Quadrado from './Quadrado'

const ListaQuadrados = (props) => {
  
  const cores = ['red', 'blue', 'green'];

  return (
    <View>
      {/* Foi utilizado o map para iterar sobre cada valor na Lista de cores e retornar algo para cada uma */}
      {/* A primeira chave é utilizada porque é um código JavaScript dentro do JSX */}
      {/* A função map recebe uma função, ndeste caso usei uma função anônima que recebe o elemento da lista cor */}
      {/* Como a função possui apenas 1 linha eu não preciso colocar o corpo dela entre {} e o return é suprimido */}
      {/* O retorno neste caso é um JSX com o componente Quadrado, como cor é uma variável JavaScrip ela é colocada entre {} */}
      {cores.map((cor) => <Quadrado color={cor}/>)}
    </View>
  );
};

export default ListaQuadrados;