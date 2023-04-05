import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import imagem from '../../assets/img.png'

export default function Footer() {
 return (
   <View style={{flexDirection: 'row', position: 'absolute', bottom:100 }}>
    <Image style={styles.imagem} source={imagem} />
    <Text style={styles.textFooter} >Desenvolvido por Breno</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    imagem:{
        width: 21,
        height: 21,
    },
    textFooter:{
        fontWeight:'bold',
        color:'#404040'
    },
})