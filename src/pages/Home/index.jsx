import database from '../../config/firebaseconfig'

import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native'

import { useEffect, useState } from 'react'

import styles from './styles'

import { Entypo, Ionicons, Feather } from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function Home({ navigation }) {

    const [task, setTask] = useState([])

    useEffect(() => {
        database.collection("tasks").onSnapshot((query) => {
            const list = []
            query.forEach(doc => {
                list.push({ ...doc.data(), id: doc.id })
            });
            setTask(list)
        })
    }, [])

    function leftActions(progress, dragX) {

        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })

        return (
            <View style={styles.leftActions}>
                <TouchableOpacity>
                    <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>Delete</Animated.Text>
                </TouchableOpacity>
            </View>
        )
    }

    async function deleteTask(id) {

        await database.collection("tasks").doc(id).delete()

    }

    async function check(item) {
        if (item.status) {
            await database.collection('tasks').doc(item.id).set({ id: item.id, description: item.description, status: false })
        } else {
            await database.collection('tasks').doc(item.id).set({ id: item.id, description: item.description, status: true })
        }
    }

    function description(item) {
        if (!item.status) {
            return (<Text style={styles.descriptionTask} onPress={() => navigation.navigate('Details', { id: item.id, description: item.description })} >{item.description}</Text>)
        } else {
            return (<Text style={styles.descriptionTaskChecked} onPress={() => navigation.navigate('Details', { id: item.id, description: item.description })} >{item.description}</Text>)
        }
    }

    function changeIcon(status) {
        if (status) {
            return (<Ionicons name="ios-checkmark-circle-sharp" size={24} color="#00E0FF" />)
        } else {
            return (<Entypo name="circle" size={24} color="#00E0FF" />)
        }
    }

    function renderItem({ item }) {
        return (
            <Swipeable renderLeftActions={leftActions} onSwipeableLeftOpen={(e) => deleteTask(item.id)}>
                <View style={styles.tasks}>
                    <TouchableOpacity style={styles.deleteTask} onPress={() => check(item)}>
                        {changeIcon(item.status)}
                    </TouchableOpacity>

                    {description(item)}
                </View>
            </Swipeable>
        )

    }

    return (
        <View style={styles.container}>

            <FlatList showsVerticalScrollIndicator={false} data={task} renderItem={renderItem} keyExtractor={item => item.id} />

            <TouchableOpacity style={styles.buttonNewTask} onPress={() => navigation.navigate("New Task")}>
                <Text style={styles.iconButton}><Feather name="plus" size={24} color="#222222" /></Text>
            </TouchableOpacity>

        </View>
    )
}