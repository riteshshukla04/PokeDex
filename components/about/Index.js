import { useRoute } from "@react-navigation/native";
import axios from "axios";
import React from "react";

import { View,Text, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import BottomCard from "./BottomCard";
import AboutPokemon from "./PokemonTypes";

const fetchData=async(id)=>{
    const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(resp=>resp.data);
    const Imageresponse=await axios.get("https://unrestapi.herokuapp.com/excel/bpusxedwb0f").then(resp=>resp.data);

    const data={
        "id":id,
        "name":response.name,
        "weight":response.weight,
        "height":response.height
    }
    for(let i of response.stats){
        data[i.stat.name]=i.base_stat
    }
    data["types"]=[];
    for(let i of response.types){
        data["types"].push(i.type.name)
    }
    data["abilities"]=[];
    for(let i of response.abilities){
        data["abilities"].push(i.ability.name)
    }
    data["ImageURL"]=Imageresponse[id-1]["Image URL"]
    return data;
}


const DetailedPokemon=()=>{
    
    const route=useRoute();
    const {routeid}=route.params;
    const [id,setId]=React.useState(routeid);
    const {data,isLoading}=useQuery(["AboutPokemon",id],()=>fetchData(id));
    if(isLoading){
        return <Text>Loading....</Text>
    }
    return (
       <>
       <AboutPokemon setid={setId} id={id} {...data}/>
       
       </>
    )

}



export default DetailedPokemon