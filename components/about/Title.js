import { useNavigation } from "@react-navigation/native";
import React from "react";

import { View,Text, StyleSheet } from "react-native";
import Icon  from "react-native-vector-icons/AntDesign";


const PokeTitle=(props)=>{
    const navigate=useNavigation();
    return (
        <View style={style.container}>
            <View style={style.subContainer}>
                <View style={style.Title}>
                    <Icon name="arrowleft" style={style.pokeTitle1} onPress={()=>{navigate.navigate("PokemonList")}} size={24} color={"#ffffff"}/>
                    <Text style={style.pokeTitle}>{props.name}</Text>
                </View>
                <Text style={style.PokeId}>{props.id}</Text>
            </View>
        </View>
    )

}

const style=StyleSheet.create({
    container:{
        backgroundColor:"transparent",
        height:32,
        margin:24,
       color:"white"
    },
    subContainer:{
        flex:1,
        flexDirection:'row',

        alignItems:"center",
        justifyContent:'space-between'
        

    },
    pokeTitle:{
        color:"#ffffff",
        fontSize:24,
        fontFamily:"poppins",
        paddingLeft:16,
        fontWeight:'bold',

    },
    pokeTitle1:{
        color:"#ffffff",
        fontSize:24,
        fontFamily:"poppins",
        fontWeight:'bold',
        textTransform:"capitalize"

    },
    Title:{
        flexDirection:"row",
        alignItems:"center"

    },
    PokeId:{
        color:"#ffffff",
        fontSize:12,
        fontFamily:"poppins-bold",
        alignItems:"flex-end"
        
    }

})

export default PokeTitle