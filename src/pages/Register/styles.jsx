import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232222',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 39
      },
      title: {
        fontWeight: 'bold',
        fontSize: 36,
        color: '#00E0FF',
        marginBottom: 40
      },
      textInput: {
        width: '100%',
        marginBottom: 25,
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#00E0FF",
        padding: 30,
        color: '#fff'
      },
      btnRegister: {
        width: '100%',
        height: 60,
        backgroundColor: '#00E0FF',
        color: '#222222',
        borderRadius: 20,
        justifyContent: 'center',
        marginBottom: 25
      },
      contentAlert: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      },
      warningAlert: {
        padding: 10,
        color: "#bdbdbd",
        fontSize: 16
      },
      registration: {
        marginTop: 20,
        color: "#4d5156"
      },
      linkSubscribe: {
        color: "#1877f2",
        fontSize: 16
      }
})

export default styles;