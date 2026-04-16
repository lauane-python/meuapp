import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="CALCULADORA" onPress={() => navigation.navigate('CalculadoraScreen')}/>

            <Button title="IMAGEM" onPress={() => navigation.navigate('ImagemScreen')}/>

            <Button title="ADVICES" onPress={() => navigation.navigate('AdvicesScreen')}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center'
    },
});