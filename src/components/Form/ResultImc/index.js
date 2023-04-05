import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Share } from "react-native";

export default function ResultImc(props){

    const onShare = async () => {
        const result = await Share.share({
            message:("Meu imc hoje é: " + props.resultImc + "\n Sua classificação é: " + props.classification )
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textResult}>{props.messageResultImc}</Text>
            <Text style={styles.textImc}>{props.resultImc}</Text>
            
            <Text style={styles.textResult}>{props.messageClassification}</Text>
            <Text style={styles.textImc}>{props.classification}</Text>
            
            <View style={styles.containerShareButton}>
                {props.resultImc != null ?
                <TouchableOpacity style={styles.share} onPress={() => onShare()} >
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
                : <View />
                }
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginTop: 20
    },
    textResult:{
        fontSize:20,
        color:'#FF0043',
        fontWeight:'bold',
    },
    textImc:{
        fontSize:40,
        color:'#FF0043',
        fontWeight:'bold',
        marginVertical:7
    },
    containerShareButton:{
        width:'100%',
        alignItems:'center',
        marginBottom:10,
    },
    share:{
        backgroundColor:'#1877f2',
        borderRadius: 50,
        paddingVertical: 5, 
    },
    shareText:{
        color:'#FFF',
        fontWeight:'bold',
        paddingHorizontal:60,
        fontSize:20,
    }
})