import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import {Dimensions, FlatList, SafeAreaView, View} from 'react-native';
import {GlobalContext} from '../Actions/GlobalProvider';
import PokeCard from '../cards/card';
import SearchBar from './search';
import Title from './title';

const SortByNumber = () => {
  const [data,] = React.useContext(GlobalContext);
  const [search,setSearch]=React.useState("");
  const  [flatListData,setFlatListData]=React.useState(data);
  console.log(search);
  const filteredData=useMemo(()=>{
    return flatListData.filter(item=>{
      return item.name.toLowerCase().includes(search.toLowerCase());
    })
  },[flatListData,search])
  return (
    <>
      <Title flatListData={flatListData} setFlatListData={setFlatListData} />
      <SearchBar search={search} setSearch={setSearch}/>
      <View style={{margin: 10, flex: 1}}>
        <FlatList
          keyExtractor={item => item.id}
          data={filteredData}
          ListFooterComponent={<View style={{height: 40}} />}
          numColumns={3}
          renderItem={({item}) => <PokeCard {...item}   />}
        />
      </View>
    </>
  );
};

export default SortByNumber;
