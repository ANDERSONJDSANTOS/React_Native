import React, { useState } from 'react';
import { Button, Text, View, TextInput} from 'react-native';

const Contador = () => {
  
  // Como os componentes são funções, uma vez que a função termina o estado das variáveis internas seria perdido
  // A gente não usa variáveis publicas neste caso porque um componente pode ser utilziado várias vezes e o estado de cada um não é necessáriamente igual
  // Para resolver isso o React utiliza estados para armazenar o estado de variáveis dos componentes
  // Quando um valor precisa ser atualizado utilize a função retornada pelo useState, isso porque essa função recebe o novo valor e atualiza a interface
  // useState pode receber um parâmetro, que é o estado inicial da variável. Das vezes seguintes que o objeto for ser redesenhado ele utilizará o valor armazenado 
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      
      {/* Dentro deste texto nós temos um uso do operador ternário para modificar o texto a ser exibido */}
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `O botão foi pressionado ${pressedCount} vezes!`
          : 'O botão ainda não\'foi pressionado'
        }
      </Text>


      {/* Ulize o componente Button para colocar um botão */}
      {/* Utilize o atributo onPress para passar uma função como parâmetro que será chamada quando o botão for pressionado */}
      {/* Neste caso eu coloquei uma função anonima na forma de seta () => essa função chama a função setPressedCount para atualizar estado */}
      {/* A função setPressedCount pode receber apenas o valor a ser atualizado, mas como o calculo envolve o valor anterior é mais seguro passar uma função */}
      {/* Neste caso eu criei uma funçõa anônima que recebe o valor antigo e retorna o valor antigo incrementado ou decrementado */}
      {/* O botão é desativado se pressedCount for 3 ou mais, o resultado da comparação feita é um bool true ou false */}
      <Button
        title='Incrementar'
        onPress={() => setPressedCount(old => old+1)}
        disabled={pressedCount >= 3}
      />
      <Button
        title='Decrementar'
        onPress={() => setPressedCount(old => old-1)}
        disabled={pressedCount <= 0}
      />

      {/* O Componente TextInput é utilizado para pegar texto do usuário */}
      {/* Utilize o atributo onChange para passar uma função como parâmetro que será chamada quando o texto mudar */}
      {/* Neste caso eu coloquei uma função anonima que recebe 1 parametro com o texto no campo e coloca este texto dentro do estado  */}
      {/* Note que neste caso eu não estou fazendo nenhum tratamentos que o que a pessoa está escrevendo é um número ou não */}
      <TextInput
        style={{ padding: 8, backgroundColor: '#f5f5f5' }}
        onChangeText={text => setPressedCount(text)}
        secureTextEntry={false}
      />
    </View>
  );
};

export default Contador;