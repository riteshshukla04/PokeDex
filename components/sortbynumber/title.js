import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import PokeBall from '../Assests/pokeball';

import SortArrow from './arrow';


const Title=(props)=>{
    
    return (
        
        <View style={styles.container}>
            <View style={styles.heading}>
                <PokeBall width={24} height={24} background={"#212121"} style={styles.Icon}/>
                <Text style={styles.TitleText}>PokeDex</Text>
            </View>
            <SortArrow {...props}/>
        </View>
        
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fffff",
        alignContent:"center",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:'row',
        margin:18,
        padding:18,
        width:'91%'
        
    },
    Icon:{
        margin:5,
    },
    heading:{
        flexDirection:'row',
        

    },
    TitleText:{
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"row",
        fontFamily:"poppins",
        fontWeight:'700',
        fontSize:24,
        color:'#212121',
        flexGrow:1,
        
      



    },
    iconContainer: {
        marginTop: 16,
        marginBottom: 16,
        marginRight:24,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    

})

export default  Title;