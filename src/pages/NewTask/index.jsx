import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { useState } from 'react'

import database from '../../config/firebaseconfig'

import styles from './styles'

export default function NewTask({navigation}) {

    const [description, setDescription] = useState('')

    async function addTask(){
        if (description != '') {
            database.collection('tasks').add({
                description: description,
                status: false
            })
            navigation.navigate("Home")
            setDescription('')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.inputText} placeholderTextColor="#ccc" placeholder="Ex: Study React Native" onChangeText={(e)=>setDescription(e)} value={description} ></TextInput>
            
            <TouchableOpacity style={styles.buttonNewTask} onPress={(e) => addTask()}>
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}