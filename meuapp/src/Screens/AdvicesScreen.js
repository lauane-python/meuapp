import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function AdvicesScreen(){
    const navigation = useNavigation();
    const [frase, setFrase] = useState("");

    async function carregarFrase(){
        try {
            const response = await fetch(
              `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
            );
            const data = await response.json();
            setFrase(data.slip.advice);
        } catch (error) {
            setFrase("Erro ao carregar frase...");
        }
    }

    useEffect(() => {
        carregarFrase();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>ADVICES</Text>

            <Text style={styles.frase}>
                {frase}
            </Text>

            <Button 
              title="Carregar..."
              onPress={carregarFrase}
            />

            <Button 
              title="Voltar"
              onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },

    titulo:{
        color:'#fff',
        fontSize:20,
        marginBottom:20
    },

    frase:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
        marginBottom:20
    }
});