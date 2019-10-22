import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from "prop-types";
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions={
    Haze:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outside"
    },
    Thunderstrom:{
        iconName:"weather-lightning",
        gradient:["#373B44","#4286f4"],
        title:"Thunderstrom in the house",
        subtitle:"Actually, outside of the house"
    },
    Drizzle:{
        iconName:"weather-hail",
        gradient:["#89F7FE","#66A6FF"],
        title:"Drizzle",
        subtitle:"Is like rain, but gay"
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#00C6FB","#005BEA"],
        title:"Rain",
        subtitle:"For more info look outside"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#7DE2FC","#B9B6E5"],
        title:"Snow",
        subtitle:"Just don't go outside"
    }, 
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FF7300","#FEF253"],
        title:"Clear",
        subtitle:"Just don't go outside"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#4DA0B0","#D39D38"],
        title:"Clouds",
        subtitle:"I know, fucking boring"
    },
    Dust:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Dust",
        subtitle:"Thanks a lot China"
    },
    Mist:{
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"],
        title:"Mist!",
        subtitle:"It's like you have no glasses on."
    }
}

export default function Weather({temp,condition}){
    return(
        //weatherOPtion["원하는 날씨 적기"].
        <LinearGradient
            colors={weatherOptions["Haze"].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions["Haze"].iconName}
                    color="white"
                />
                <Text style={styles.temp}>{temp}F</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions["Haze"].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions["Haze"].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstrom",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Mist",
        "Haze",
        "Dust"
    ]).isRequired
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
    },  
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
       color:"white",
       fontSize:44,
       fontWeight:"300",
       marginBottom:10
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
})
