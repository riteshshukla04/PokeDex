import { MotiView } from 'moti';
import React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../constants/color';
const BottomCard = (props) => {
  return (
    <View style={style.container}>
      <View style={style.pokemonType}>
        {props.types.map((item)=>{return(
            <Text style={[style.pokemonTypeText, {backgroundColor: colors[item]}]} key={item}>
            {item}
          </Text>
        )
          
        })}
        
       
      </View>
      <View style={style.AboutContainer}>
        <Text style={[style.AboutText,{color:colors[props.types[0]]}]}>About</Text>
      </View>
      <View style={style.BasicStatsContainer}>
      <View style={style.TopBasicStatsContainer}>
          <View style={style.BasicStats}>
            <Icon
              style={style.BasicStatsIcon}
              name="weight"
              size={20}
              color={'#212121'}
            />
            <Text style={style.BasicStatsText}> {props.weight} KG </Text>
          </View>
          <Text style={style.BasicStatsName}> Weight </Text>
        </View>

        
        <View style={style.HorizontalRuler}></View>
        <View style={style.TopBasicStatsContainer}>
          <View style={style.BasicStats}>
            <Icon
              style={style.BasicStatsIcon}
              name="ruler-vertical"              
              size={20}
              color={'#212121'}
            />
            <Text style={style.BasicStatsText}> {props.height}m </Text>
          </View>
          <Text style={style.BasicStatsName}> Height </Text>
        </View>
        <View style={style.HorizontalRuler}></View>
        <View style={style.TopBasicStatsContainer}>
          <View style={[style.BasicStats,{flexDirection:'column',marginBottom:5}]}>
            {props.abilities.map((item)=>{
              return(
                <Text style={[style.BasicStatsText,{fontSize:14,fontWeight:'bold',fontFamily:'poppins',color:'black'}]} key={item}> {item}</Text>
              )
            })}
          
            
          </View>
          <Text style={style.BasicStatsName}> Abilities </Text>
        </View>
      </View>
      <Text style={style.pokeInfo}>It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.</Text>
      <View style={style.AboutContainer}>
        <Text style={[style.AboutText,{color:colors[props.types[0]]}]}>Base Stats</Text>
      </View>
      <View style={style.BaseStatsContainer}>
        <View style={style.IndividualStatContainer}>
          <Text style={[style.statParameter,{color:colors[props.types[0]]}]}>HP{'   '}</Text>
          <Text >{props.hp}</Text>
          <View style={style.statBar}>
            <MotiView
            from={{
              width:(0/100)*231
            }
            } 
            animate={{
              width:(props.hp/100)*231
            }
            }
            transition={{
              type:'timing',
              duration:'1000',
              repeat:1,
              repeatReverse:false
            }}
            style={[style.filledBar,{backgroundColor:colors[props.types[0]]}]} />
          </View>
        </View>
        <View style={style.IndividualStatContainer}>
          <Text style={[style.statParameter,{color:colors[props.types[0]]}]}>Atk{'   '}</Text>
          <Text>{props.attack}</Text>
          <View style={style.statBar}>
          <MotiView
            from={{
              width:(0/100)*231
            }
            } 
            animate={{
              width:(props.attack/100)*231
            }
            }
            transition={{
              type:'timing',
              duration:'1000',
              repeat:1,
              repeatReverse:false
            }}
            style={[style.filledBar,{backgroundColor:colors[props.types[0]]}]} />
          </View>
        </View>
        <View style={style.IndividualStatContainer}>
          <Text style={[style.statParameter,{color:colors[props.types[0]]}]}>Def{'   '}</Text>
          <Text>{props.defense}</Text>
          <View style={style.statBar}>
          <MotiView
            from={{
              width:(0/100)*231
            }
            } 
            animate={{
              width:(props.defense/100)*231
            }
            }
            transition={{
              type:'timing',
              duration:'1000',
              repeat:1,
              repeatReverse:false
            }}
            style={[style.filledBar,{backgroundColor:colors[props.types[0]]}]} />
          </View>
        </View>
        <View style={style.IndividualStatContainer}>
          <Text style={[style.statParameter,{color:colors[props.types[0]]}]}>SAtk{' '}</Text>
          <Text>{props["special-attack"]}</Text>
          <View style={style.statBar}>
          <MotiView
            from={{
              width:(0/100)*231
            }
            } 
            animate={{
              width:(props["special-attack"]/100)*231
            }
            }
            transition={{
              type:'timing',
              duration:'1000',
              repeat:1,
              repeatReverse:false
            }}
            style={[style.filledBar,{backgroundColor:colors[props.types[0]]}]} />
          </View>
        </View>
        <View style={style.IndividualStatContainer}>
          <Text style={[style.statParameter,{color:colors[props.types[0]]}]}>SDef{' '}</Text>
          <Text>{props["special-defense"]}</Text>
          <View style={style.statBar}>
          <MotiView
            from={{
              width:(0/100)*231
            }
            } 
            animate={{
              width:(props["special-defense"]/100)*231
            }
            }
            transition={{
              type:'timing',
              duration:'1000',
              repeat:1,
              repeatReverse:false
            }}
            style={[style.filledBar,{backgroundColor:colors[props.types[0]]}]} />
          </View>
        </View>
        <View style={style.IndividualStatContainer}>
          <Text style={[style.statParameter,{color:colors[props.types[0]]}]}>SPD{'  '}</Text>
          <Text>{props.speed}</Text>
          <View style={style.statBar}>
          <MotiView
            from={{
              width:(0/100)*231
            }
            } 
            animate={{
              width:(props["speed"]/100)*231
            }
            }
            transition={{
              type:'timing',
              duration:'1000',
              repeat:1,
              repeatReverse:false
            }}
            style={[style.filledBar,{backgroundColor:colors[props.types[0]]}]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '65%',
    width: '95%',
    padding: 20,

    margin: 10,
    position: 'absolute',
    bottom: 0,
    borderRadius: 8,
  },
  pokemonType: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 30,
  },
  pokemonTypeText: {
    textAlign: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    width: 65,
    height: 30,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    margin: 5,
  },
  AboutContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 10,
  },
  AboutText: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 22,
  
  },
  BasicStats: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    fontSize: 22,
    flexDirection: 'row',
    margin: 24,
    marginBottom:20
  },
  BasicStatsIcon: {
    marginRight: 10,
  },
  BasicStatsText: {
    fontFamily: 'poppins',
    fontSize: 16,
  },
  BasicStatsName: {
    fontFamily: 'poppins',
    fontSize: 16,
    marginLeft:25,
    paddingLeft:10
  },
  TopBasicStatsContainer:{
    padding:0,
    margin:0,

  },  
  BasicStatsContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  HorizontalRuler: {
    width: 1,
    height: 60,
    backgroundColor: 'black',
    marginTop:20
  },
  pokeInfo:{
    textAlign:"justify",
    marginTop:18,
    fontFamily:'poppins',
    fontSize:15,
    fontWeight:'bold'
  },
  BaseStatsContainer:{
    
    textAlign: 'center',
    justifyContent:'center',
    width: '100%',
    marginTop:5
  },
  IndividualStatContainer:{
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop:5
  },
  statBar:{
    width:231,
    height:4,
    backgroundColor:'rgba(245, 125, 49, 0.2)',
    borderRadius:4
  },
  filledBar:{
    width:(80/100)*231,
    maxWidth:231,
    height:4,
    backgroundColor:'rgba(245, 125, 49, 1)',
    opacity:1,
    borderRadius:4
  },
  statParameter:{
    fontFamily:'poppins',
    fontSize:15,
    fontWeight:'bold',
   
  }
});

export default BottomCard;
