import React from "react";

import { View,Text, StyleSheet, Image, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
const ImageContainer=(props)=>{
    console.log(props.id);
    return (
        <View style={style.container}>
            <Icon name="arrowleft" size={24} color={'#ffffff'} onPress={()=>{props.setid((props.id-1)<1?250:(props.id-1))}}/>
           <Image  style={style.PokemonImage} source={{uri:props.ImageURL}} />
           <Icon name="arrowright" size={24} color={'#ffffff'} onPress={()=>{props.setid((props.id+1)>250?1:(props.id+1))}}/>
        </View>
    )

}

const style=StyleSheet.create({
    container:{
        
        height:220,
        width:Dimensions.get('window').width-40,
        alignContent:'center',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        margin:25

    },
    PokemonImage:{
        width:200,
        height:200,
        margin:15,
        padding:15,
        flex: 0,
        resizeMode:'contain'
    }
   
})

export default ImageContainer