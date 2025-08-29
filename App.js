import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Espelho({ placeholder, label = "Você digitou:" }) {
  const [texto, setTexto] = useState(''); /**USUARIO, DIGITE AQUI */

  const limpar = () => {
    setTexto('');
  };

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={texto}
        onChangeText={setTexto}
      />
      <Text>
        {texto ? `${label} ${texto}` : 'Nada digitado ainda..'}
      </Text>
      <Button title="Limpar" onPress={limpar} />
    </View>
  );
}
