import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        padding:10,
    },
    textTitle:{
        color:'#FF0043',
        fontSize: 24,
        fontWeight:'bold',
        
    }
})