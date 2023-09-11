import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import NumericInput from "react-native-numeric-input";
import { RadioButton, TextInput } from 'react-native-paper';
import Styles from "./styles/styles.js";

export default function App() {

  const [value, setValue] = useState("");

  const [radioval, setRadioval] = useState("female");
  const [number, onChangeNumber] = useState("");

  


  return (
    <View style={Styles.container}>
      <View style ={{justifyContent: "flex-start", flexDirection: "column" }}>
      <Text>Change the color</Text>
      <Switch/>
      </View>

      {/*Headline*/}
      <View style={Styles.headerPosition}>
      <Text style={Styles.header}>Alcometer</Text>
      </View>

      {/*Weight component */}
      <Text style ={Styles.subTitles}>Weight</Text>
      <TextInput style={Styles.submit}
      keyboardType='number-pad'
      onChangeText={onChangeNumber}
      value={number}
      placeholder={"Enter you weight (kg)"}
      clearTextOnFocus= "true"/>

            {/*Radiobutton component */}
      <Text style = {Styles.subTitles}>Gender</Text>
      <RadioButton.Group onValueChange = {newValue => setRadioval(newValue)} value={radioval}>
        <View>
          <RadioButton value = "female"/>
          <Text>Female</Text>
        </View>
        <View>
          <RadioButton value = "male"/>
          <Text>Male</Text>
        </View>
      </RadioButton.Group>

      {/*Bottles component */}
      <Text style = {Styles.subTitles}>            Bottles                               Hours</Text>
  
      <View style ={{justifyContent: "space-around", flexDirection: "row" }}>
      
      <NumericInput 
      minValue={0} 
      onChange={v => setValue(v)}
      rounded 
      borderColor = "#A1A499"
      rightButtonBackgroundColor={"#B0BBBF"}
      leftButtonBackgroundColor={"#B0BBBF"}/>
      <NumericInput 
      minValue={0} 
      onChange={v => setValue(v)}
      rounded
      borderColor = "#A1A499"
      rightButtonBackgroundColor={"#B0BBBF"}
      leftButtonBackgroundColor={"#B0BBBF"}/>
      </View>

       {/*Results component*/}
       <Text></Text>

      {/*Calculate component*/}
      <TouchableOpacity onPress={()=>console.log("Submit")}>
          <Text style = {Styles.button}>CALCULATE</Text>
        </TouchableOpacity> 


      <StatusBar style="auto" />
    </View>
  );
}


// colors wb E2D4B7, bb 9C9583, txt A1A499, B0BBBF, CADBC8

