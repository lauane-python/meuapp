import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const {width,height} = Dimensions.get("screen")

export default function CalculadoraScreen() {
  const navigation = useNavigation();

  const [n1, setn1] = useState(0);
  const [n2, setn2] = useState(0);
  const [r, setr] = useState(0);

  function somar() {
    setr(Number(n1) + Number(n2));
  }
  function sub() {
    setr(Number(n1) - Number(n2));
  }
  function mult() {
    setr(Number(n1) * Number(n2));
  }
  function div() {
    setr(Number(n1) / Number(n2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

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
      <View style={{flexDirection:'row', justifyContent:'space-around', width:width}}>
        <Button title="+" onPress={somar} style={styles.button1} />
        <Button title="-" onPress={sub} style={styles.button1} />
        <Button title="X" onPress={mult} style={styles.button1} />
        <Button title="/" onPress={div} style={styles.button1} />
      </View>
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
  titulo:{
    fontFamily:'sans-serif-medium',
    fontSize:40,
    marginBottom:20,
  },
  texto: {
    fontSize: 20,
    margin: 10,
    marginTop: 50
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 50,
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    margin: 10
  },
});