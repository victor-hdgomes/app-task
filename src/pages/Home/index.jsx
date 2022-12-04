import firebase from '../../config/firebaseconfig'

import { View, Text, TouchableOpacity, FlatList, Animated } from 'react-native'

import { useEffect, useState } from 'react'

import styles from './styles'

import { Entypo, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function Home({ navigation, route }) {

    const [task, setTask] = useState([])

    const database = firebase.firestore();

    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
        }).catch((error) => {

        });
    }

    useEffect(() => {
        database.collection(route.params.idUser).onSnapshot((query) => {
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

        await database.collection(route.params.idUser).doc(id).delete()

    }

    async function check(item) {
        if (item.status) {
            await database.collection(route.params.idUser).doc(item.id).set({ id: item.id, description: item.description, status: false })
        } else {
            await database.collection(route.params.idUser).doc(item.id).set({ id: item.id, description: item.description, status: true })
        }
    }

    function description(item) {
        if (!item.status) {
            return (<Text style={styles.descriptionTask} onPress={() => navigation.navigate('Details', { id: item.id, description: item.description, idUser: route.params.idUser })} >{item.description}</Text>)
        } else {
            return (<Text style={styles.descriptionTaskChecked} onPress={() => navigation.navigate('Details', { id: item.id, description: item.description, idUser: route.params.idUser })} >{item.description}</Text>)
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
                    <TouchableOpacity style={styles.deleteTask} onPress={() => check(item, route.params.idUser)}>
                        {changeIcon(item.status, route.params.idUser )}
                    </TouchableOpacity>

                    {description(item, route.params.idUser)}
                </View>
            </Swipeable>
        )

    }

    return (
        <View style={styles.container}>

            <FlatList showsVerticalScrollIndicator={false} data={task} renderItem={renderItem} keyExtractor={item => item.id} />

            <TouchableOpacity style={styles.buttonNewTask} onPress={() => navigation.navigate("New Task", { idUser: route.params.idUser })}>
                <Text style={styles.iconButton}><Feather name="plus" size={24} color="#222222" /></Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonLogout} onPress={() => logout()}>
                <Text style={styles.iconButtonLogout}>
                    <MaterialCommunityIcons name="location-exit" size={23} color="#00E0FF" />
                </Text>
            </TouchableOpacity>

        </View>
    )
}