import React from "react";

import { View,Text, StyleSheet, Image } from "react-native";
import PokeBall from "../Assests/pokeball";
import { colors } from "../constants/color";
import BottomCard from "./BottomCard";
import ImageContainer from "./ImagePart";
import PokeTitle from "./Title";
const AboutPokemon=(props)=>{
    return (
        <View style={[style.container,{backgroundColor:colors[props.types[0]]}]}>
            <PokeTitle {...props}/>
            <Image style={style.PokeBall}  source={require('../Assests/POKEBALL.png')} />
            <BottomCard {...props}/>
            <ImageContainer {...props}/>
            
            
        </View>
    )

}

const style=StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        alignContent:'center'

    },
    PokeBall:{
        position:"absolute",
        left:150,
        top:50,
        width:240,
        height:240,
        opacity:0.1,
        borderColor:'#000000',
        shadowColor:"rgba(0, 0, 0, 0.25)",
        shadowRadius:4,
        
      },
      PokemonImage:{
        width:200,
        height:200
      }
})

export default AboutPokemon