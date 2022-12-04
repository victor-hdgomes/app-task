import { useState, useEffect } from 'react'

import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import styles from './styles'

import firebase from '../../config/firebaseconfig'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Login({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                navigation.navigate("Home", { idUser: user.uid })
            })
            .catch((error) => {
                setErrorLogin(true)
                let errorCode = error.code;
                let errorMessage = error.message;
            });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                navigation.navigate("Home", { idUser: user.uid })
            } else {
            }
        });
    }, [])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>To Do</Text>

            <TextInput placeholderTextColor={'#fff'} type="text" value={email} placeholder='Email' style={styles.textInput} onChangeText={e => setEmail(e)} />
            <TextInput secureTextEntry={true} placeholderTextColor={'#fff'} value={password} placeholder='Password' style={styles.textInput} onChangeText={e => setPassword(e)} />
            {errorLogin
                ?

                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>Invalid email or password</Text>
                </View>

                :

                <View />
            }

            {email === "" || password === "" ?
                <TouchableOpacity disabled={true} style={styles.btnRegister} onPress={() => loginFirebase()}>
                    <Text style={{ textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.btnRegister} onPress={() => loginFirebase()}>
                    <Text style={{ textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
            }

            <Text style={styles.registration}>Don't have a registration? <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Register")}>Register now</Text></Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}