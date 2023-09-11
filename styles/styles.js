import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight+5,
        backgroundColor: '#E2D4B7',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    headerPosition: {
        padding: 10,
        margin: 20,
        fontWeight: "bold",
        fontSize: 30,
        justifyContent: "center", 
        flexDirection: "row", 
        alignItems:"center"

    },

    header: {  fontWeight: "bold",
    fontSize: 25,},

    subTitles: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 5
    },

    submit: {
        borderColor: "#A1A499",
        borderWidth: 3,
        padding: 3,
        margin: 5,
        marginBottom: 35,
        borderRadius: 10,
        overflow: "hidden",
    },

    numInput:{

    },

    button: {
        borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden", //applessa että reunoihin saa radiuksen näkyviin
        color: "black",
        backgroundColor: "#A1A499",
        padding: 15,
        margin: 30,
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold"
    }

})