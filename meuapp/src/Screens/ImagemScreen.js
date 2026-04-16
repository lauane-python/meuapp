import { Button, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

export default function ImagemScreen(){
    const navigation = useNavigation();
    const [imagem, setImagem] = useState(null);

    function carregarImagem(){
        const url = `https://picsum.photos/300/300?random=${Math.random()}`;
        setImagem(url);
    }

    useEffect(() => {
        carregarImagem();
    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>IMAGEM</Text>

            {imagem && (
                <Image 
                    source={{ uri: imagem }} 
                    style={styles.imagem}
                />
            )}

            <Button 
              title="Carregar..."
              onPress={carregarImagem}
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
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        color:'#fff',
        fontSize:20,
        marginBottom:10
    },
    imagem:{
        width:300,
        height:300,
        marginBottom:20,
        borderRadius:10
    }
});