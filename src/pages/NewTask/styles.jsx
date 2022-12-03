import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222'
    },
    label: {
        width: "80%",
        marginTop: 20,
        fontSize: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#00E0FF'
    },
    inputText: {
        width: "80%",
        marginTop: 20,
        fontSize: 14,
        padding: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#fff'
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
        fontWeight: 'bold'
    }
});

export default styles;