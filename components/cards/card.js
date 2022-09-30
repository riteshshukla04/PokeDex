import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View,Text, Image, Dimensions, TouchableOpacity } from "react-native"


const PokeCard=(props)=>{
    const navigation=useNavigation();
    
    return(
        <TouchableOpacity style={style.container} onPress={()=>navigation.navigate("DetailedPokemon",{
            routeid:props.id
          })}>
            <View style={style.number}><Text>#{props.id}</Text></View>
            <View style={style.ImageContainer}> 
            <Image style={style.Image} source={{uri:props.imageURL}}/>
            </View>
            <View style={style.bottomCard}>
                <Text style={style.PokemonName}>{props.name}</Text>
            </View>
            
        </TouchableOpacity>
    )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderColor:"#734CB48",
        borderWidth:1,
        borderRadius:8,
        width:(Dimensions.get('window').width-50)/3,
        height:120,
        margin:6,
        overflow:'hidden'

    },
    number:{
        alignItems:'flex-end',
        padding:4
        
    },
    ImageContainer:{
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        alignItems:"center"
    },
    Image:{
        width:66,
        height:66

    },
    bottomCard:{
        height:24,
        backgroundColor:'#74CB48',
        justifyContent:'flex-end',
        alignItems:'center',
        textAlign:"center",
        position:'relative'
    },
    PokemonName:{
        fontFamily:'poppins-bold',
        fontSize:15,
        color:'white'
    }
})

export default PokeCard;