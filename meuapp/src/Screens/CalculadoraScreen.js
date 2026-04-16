import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function CalculadoraScreen() {
  const navigation = useNavigation();

  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  const [r, setr] = useState(0);

  function somar(){ 
    setr(Number(n1) + Number(n2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite um número'
        onChangeText={(text) => setn1(text)}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.input}
        placeholder='Digite outro número'
        onChangeText={(text) => setn2(text)}
        keyboardType='numeric'
      />

      <Button title="SOMAR" onPress={somar} />

      <Text style={styles.texto}>Resultado: {r}</Text>

      <Button title="HOME" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    fontSize:20,
    margin:10
  },

  input:{
    backgroundColor:'white',
    width:200,
    height:50,
    borderWidth:2,
    fontSize: 20,
    borderRadius:10,
    margin:10
  },
});