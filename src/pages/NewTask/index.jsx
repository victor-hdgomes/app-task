import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { useState } from 'react'

import firebase from '../../config/firebaseconfig'

import styles from './styles'

export default function NewTask({ navigation, route }) {

    const [description, setDescription] = useState('')

    const database = firebase.firestore();

    async function addTask() {
        if (description != '') {
            database.collection(route.params.idUser).add({
                description: description,
                status: false
            })
            navigation.navigate("Home", {idUser: route.params.idUser})
            setDescription('')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.inputText} placeholderTextColor="#ccc" placeholder="Ex: Study React Native" onChangeText={(e) => setDescription(e)} value={description} ></TextInput>

            <TouchableOpacity style={styles.buttonNewTask} onPress={(e) => addTask()}>
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}