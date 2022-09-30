import React, { useReducer } from 'react'
import { StyleSheet,Text } from 'react-native'
import { MotiView, View } from 'moti'
import { colors } from '../constants/color'
export default function Loading() {
  return (
    <MotiView style={styles.container}
    from={{
      rotateZ:"0deg"

      
    }}
    animate={{
      marginBottom:150,
      rotateZ:"360deg"
     
    }} 
    transition={{
      type:'timing',
      duration:'1000',
      loop:true,
      repeatReverse:false
     
    }}
    >
      <MotiView from={{
        marginBottom:15,
        

        
      }}
      animate={{
        marginBottom:75,
       
       
      }} 
      transition={{
        type:'timing',
        duration:'1000',
        loop:true
       
      }}
      style={styles.PokeBallContainer}/>
      <MotiView from={{
        
        
        
      }}
      animate={{
        
        
        

       
      }} 
      transition={{
        type:'timing',
        duration:'1000',
        loop:true,
        repeatReverse:false
       
      }} style={[styles.PokeBallContainer,styles.Inverse]}/>
      <View style={styles.InnerCircle} ></View>
     
    </MotiView>
  )
}


const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  PokeBallContainer:{
    backgroundColor:"transparent",
    height:140,
    width:280,
    borderRadius:170,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
    borderWidth:60,
    borderBottomWidth:0,
   
    
   
  },
  InnerCircle:{
    width:80,
    height:80,
    borderRadius:50,
    backgroundColor:'black',
    borderWidth:0,
    position:"absolute",
    left:"40%",
    top:"43%"

   
  },
  LoadingText:{
    fontFamily:'poppins',
    fontSize:30,
    color:colors.fire,
    fontWeight:"bold"
  },
  Inverse:{
    transform:[{
      rotateX:"180deg",
    }],
  
}})