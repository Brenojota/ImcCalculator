import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Vibration,
    Pressable,
    Keyboard,

} from "react-native";
import Footer from "../Footer";
import ResultImc from "./ResultImc";

export default function Form() {

    const [heigth, setHeigth] = useState(null)
    const [weigth, setWeigth] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [classification, setClassification] = useState(null)
    const [messageClassification, setMessageClassification] = useState(null)
    const [textButton, setTextButton] = useState('CALCULAR')
    const [erroMessage, setErroMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = heigth.replace(",", '.')
        let weigthFormat = weigth.replace(",", '.')

        let calcImc = (weigthFormat / (heightFormat * heightFormat)).toFixed(2)

        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: calcImc}])

        if(calcImc < 18.5){
            setClassification('Magreza')
        }else if(calcImc > 18.40 && calcImc < 25.00){
            setClassification('Peso Normal')
        }else if(calcImc >= 25.00 && calcImc < 30.00){
            setClassification('Sobrepeso')
        }else if(calcImc >=30.00 && calcImc < 35.00){
            setClassification('Obesidade grau I')
        }else if(calcImc >= 35.00 && calcImc <= 40.00 ){
            setClassification('Obesidade grau II')
        }
        else{
            setClassification('Obesidade grau III')
        }
        return setImc(calcImc)
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate()
            setErroMessage("campo obrigatório*")
        }
    }

    function validationImc() {
        if (weigth != null && heigth != null) {
            imcCalculator();

            setHeigth(null)
            setWeigth(null)
            setMessageImc("Seu imc é igual: ")
            setMessageClassification('Sua classificação é: ')
            setTextButton("Calcular Novamente")
            
            setErroMessage(null)
            
        }
        else {
            verificationImc();

            setImc(null)
            setClassification('')
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e altura")
        }
    }

    return (
        <View  style={styles.formContext} >
            {imc == null ?

                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{erroMessage}</Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.input}
                        onChangeText={setHeigth}
                        value={heigth}
                        placeholder="ex: 1.75"

                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{erroMessage}</Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.input}
                        onChangeText={setWeigth}
                        value={weigth}
                        placeholder="75.30"

                    />
                    <TouchableOpacity style={styles.btn} onPress={() => validationImc()}>
                        <Text style={styles.btnText}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :


                <View style={styles.exhibitionResultImc} >
                    <ResultImc messageResultImc={messageImc} resultImc={imc} messageClassification={messageClassification} classification={classification} />
                    <TouchableOpacity style={styles.btn} onPress={() => validationImc()}>
                        <Text style={styles.btnText}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            
            <Footer />
        </View>
    )
};

const styles = StyleSheet.create({
    formContext: {
        width: '100%',
        height: "100%",
        bottom: 0,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form: {
        width: "100%",
        height: '90%',
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    btn: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '10%',
        backgroundColor: '#FF0043',
        paddingVertical: 14,
        marginLeft: 12,
    },
    btnText: {
        fontSize: 20,
        color: '#FFF',
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    exhibitionResultImc:{
        width:'100%',
        height:'80%',
    }
})