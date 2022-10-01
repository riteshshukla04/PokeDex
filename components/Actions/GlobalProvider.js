import axios from "axios";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

export const GlobalContext=React.createContext();
function lpad(value, padding) {
    var zeroes = new Array(padding+1).join("0");
    return (zeroes + value).slice(-padding);
}
const fetchData=async()=>{
    const response=await axios.get("https://pokeapi.co/api/v2/pokemon?limit=250").then(resp=>resp.data);
    const Imageresponse=await axios.get("https://unrestapi.herokuapp.com/excel/bpusxedwb0f").then(resp=>resp.data);
    const datas=[];
    for(let i=0 ;i<response.results.length;i++){
        
        let data={
            "id":i+1,
            "name":response.results[i].name,
            "imageURL":Imageresponse[i]["Image URL"]
        }
        datas.push(data);
    }
    return datas;

}





export const GlobalProvider=(props)=>{
    
    const {data,isLoading,isError,error}=useQuery("PokemonData",fetchData);
    if(isLoading){
        return <Loading/>
    }
    return(
        <GlobalContext.Provider value={[data,isLoading,isError,error]}>
            {props.children}
        </GlobalContext.Provider>
    )

}