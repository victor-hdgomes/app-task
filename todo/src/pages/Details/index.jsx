import {View, Text, TextInput, TouchableOpacity} from 'react-native'

import { useState } from 'react'

import styles from './styles'

import database from '../../config/firebaseconfig'

export default function Details({navigation, route}) {

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id

    async function editTask() {
        if (descriptionEdit != '') {
            database.collection("tasks").doc(idTask).update({
                description: descriptionEdit
            })
            navigation.navigate("Home")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.inputText} placeholderTextColor="#ccc" placeholder="Ex: Study React Native" onChangeText={(e)=>setDescriptionEdit(e)} defaultValue={descriptionEdit} ></TextInput>
            
            <TouchableOpacity style={styles.buttonEditTask} onPress={(e) => editTask()}>
                <Text style={styles.iconButton}>Edit</Text>
            </TouchableOpacity>

        </View>
    )
}