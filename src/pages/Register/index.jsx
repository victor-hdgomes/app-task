import { useState, useEffect } from 'react'

import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import styles from './styles'

import firebase from '../../config/firebaseconfig'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Register({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorRegister, setErrorRegister] = useState("")

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate("Home", { idUser: user.uid })
            })
            .catch((error) => {
                setErrorRegister(true)
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }

    useEffect(() => {

    }, [])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Register</Text>

            <TextInput placeholderTextColor={'#fff'} type="text" value={email} placeholder='Email' style={styles.textInput} onChangeText={e => setEmail(e)} />
            <TextInput secureTextEntry={true} placeholderTextColor={'#fff'} value={password} placeholder='Password' style={styles.textInput} onChangeText={e => setPassword(e)} />
            {errorRegister
                ?

                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>Invalid email or password</Text>
                </View>

                :

                <View />
            }

            {email === "" || password === "" ?
                <TouchableOpacity disabled={true} style={styles.btnRegister} onPress={() => register()}>
                    <Text style={{ textAlign: 'center' }}>Register</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.btnRegister} onPress={() => register()}>
                    <Text style={{ textAlign: 'center' }}>Register</Text>
                </TouchableOpacity>
            }

            <Text style={styles.registration}>Do you have an account? <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Login")}>Sign in</Text></Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}