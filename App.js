import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Espelho({ placeholder = "Digite algo aqui", label = "Você digitou:" }) {
  const [texto, setTexto] = useState('11');

  return (
    <View>
      <Text color="blue">Digite no campo abaixo:</Text>
      <TextInput
        placeholder={placeholder}
        value={texto}
        onChangeText={setTexto}
        color="green"
      />
      <Text color="purple">
        {texto ? `${label} ${texto}` : 'Nada digitado ainda..'}
      </Text>
      <Button
        title="Limpar"
        onPress={() => setTexto('')}
        color="red"
      />
    </View>
  );
}
