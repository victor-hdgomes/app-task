import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        paddingTop: 20
    },
    buttonNewTask: {
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 30,
        right: 20,
        backgroundColor: '#00E0FF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton: {
        color: '#222222',
        fontSize: 20,
        fontWeight: 'bold'
    },
    tasks: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        backgroundColor: '#282828',
        marginLeft: '5%',
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 10,
        },
        shadowOpacity: 0.47,
        shadowRadius: 10.00,

        elevation: 30,
    },
    deleteTask: {
        justifyContent: 'center',
        paddingLeft: 15
    },
    descriptionTask: {
        width: '80%',
        alignContent: 'flex-start',
        padding: 25,
        marginRight: 15,
        color: '#fff'
    },
    descriptionTaskChecked: {
        width: '80%',
        alignContent: 'flex-start',
        padding: 25,
        marginRight: 15,
        color: '#fff',
        textDecorationLine: 'line-through'
    },
    leftActions: {
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        height: '72%',
        marginTop: 6,
        flex: 1
    },
    actionText: {
        fontSize: 17,
        color: '#fff',
        padding: 20,
    },
    withoutTask: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonCreate: {
        textDecorationLine: 'underline'
    },
    buttonLogout: {
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButtonLogout: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    }
})

export default styles;