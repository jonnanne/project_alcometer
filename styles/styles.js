import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
    containerLight: {
        flex: 1,
        marginTop: Constants.statusBarHeight+5,
        backgroundColor: '#E2DED0',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    containerDark: {
        flex: 1,
        marginTop: Constants.statusBarHeight+5,
        backgroundColor: '#746C70',
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

    header: {  
        fontWeight: "bold",
        fontSize: 25,},

    switchPosition: {
        padding:10,
        margin: 10,
        justifycontent: "flex-start",
        flexdirection: "row",
        alignItems: "flex-start",
    },

    subTitles: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 5,
        padding:5
    },

    submit: {
        borderColor: "#4E4F50",
        borderWidth: 3,
        padding: 3,
        margin: 5,
        marginBottom: 35,
        borderRadius: 10,
        overflow: "hidden",
    },

    radioButtonContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginBottom: 20, 
        marginTop: 20, 
        marginLeft: 20, 
        marginRight: 20
    },

    radioButtonText:{
        fontSize: 15,
        fontWeight: "bold",
        margin: 5,
    },

    numInput:{
        justifyContent: "space-around", 
        flexDirection: "row", 
        marginBottom:20 
    },

    resultText: {
        fontWeight: "bold",
        fontSize: 22,
        margin: 15,
        padding: 15,
        alignItems: "center"
    },

    button: {
        borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden", //applessa että reunoihin saa radiuksen näkyviin
        backgroundColor: "#A1A499",
        padding: 20,
        margin: 20,
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold"
    },

})

export const colors = {
    color1: "#059a30ff",
    color2: "#f1f911",
    color3: "#f30909",
    radioButtonFemale: "#3a1c1c",
    radioButtonMale: "#3a1c1c",
    numInputBackground: "#B0BBBF",
    numInputBorder: "#A1A499"
    
}
//Colors
// Bluegray #647C90, Ivory #E2DED0, Cool gray #4E4F50, Gray #746C70 