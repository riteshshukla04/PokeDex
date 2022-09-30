import React, { useContext, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import { useQueryClient } from 'react-query';
import { GlobalContext } from '../Actions/GlobalProvider';
const SearchBar=({flatListData,setFlatListData})=>{
    const queryClient=useQueryClient()
    const [data]=useContext(GlobalContext);
    const [search,setSearch]=useState("");
    const HandleChange=(search)=>{
        if(search){
            const newData=flatListData.filter((item)=>{
                const itemData = item.name
                ? item.name.toUpperCase()
                : ''.toUpperCase();
              const textData = search.toUpperCase();
              return itemData.indexOf(textData) > -1;
            })
            setFlatListData(newData);
            setSearch(search);
            
        }
        else{
            setFlatListData(data);
            setSearch(search);
           
        }
       
        
    }
    return (
        <View style={[styles.searchSection,styles.boxShadow]}>
        <Icon name='search1' size={15} style={styles.searchIcon}></Icon>
    
    <TextInput
        style={[styles.input,styles.boxShadow]}
        placeholder="User Nickname"
        onChangeText={(e)=>HandleChange(e)}
        value={search}
    />
</View>
        
    )
}


const styles=StyleSheet.create({
    searchSection: {
      
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin:10,
        height:44,
        borderRadius:8,
        
        
        
    },
    searchIcon: {
        position:"relative",
        left:10,
        margin:0,
        padding:0

        
    },
    input: {
        flex: 1,
        fontSize:15,
        fontFamily:'poppins-bold',
        color:"black",
        alignItems:'center',
        justifyContent:"center",
        textAlign:"center"
        
    },
    boxShadow:{
       
        shadowColor: '#00000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
  },
    
})
export default SearchBar;