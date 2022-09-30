import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {Dimensions, FlatList, SafeAreaView, View} from 'react-native';
import {GlobalContext} from '../Actions/GlobalProvider';
import PokeCard from '../cards/card';
import SearchBar from './search';
import Title from './title';

const SortByNumber = () => {
  const [data,isLoading] = React.useContext(GlobalContext);
  const [flatListData,setFlatListData]=React.useState(data);
  
  return (
    <>
      <Title flatListData={flatListData} setFlatListData={setFlatListData} />
      <SearchBar flatListData={flatListData} setFlatListData={setFlatListData}/>
      <View style={{margin: 10, flex: 1}}>
        <FlatList
          keyExtractor={item => item.id}
          data={flatListData}
          ListFooterComponent={<View style={{height: 40}} />}
          numColumns={3}
          renderItem={({item}) => <PokeCard {...item}   />}
        />
      </View>
    </>
  );
};

export default SortByNumber;
