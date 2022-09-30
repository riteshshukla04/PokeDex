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



import Icon from 'react-native-vector-icons/AntDesign';
const SortArrow=(props)=>{
    const [increase,setIncrease]=useState(false);
    const HandleCHange=async()=>{

      setIncrease(!increase);
       const flatListdata= [...props.flatListData];
       await flatListdata.reverse();
      props.setFlatListData(flatListdata);
    }
    return(
        <View style={styles.iconContainer}>
        {increase? <Icon name="arrowdown"  onPress={HandleCHange} size={30} color="#900" />:<Icon name="arrowup"  onPress={HandleCHange} size={30} color="#900" />}
      </View>

    )
}
const styles=StyleSheet.create({
    iconContainer: {
        marginTop: 16,
        marginBottom: 16,
        marginRight:24,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      },
    

})

export default SortArrow;