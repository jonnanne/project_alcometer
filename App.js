import { useState } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Switch, Text, View, Alert } from 'react-native';
import NumericInput from "react-native-numeric-input";
import { RadioButton, TextInput } from 'react-native-paper';
import Styles from "./styles/styles.js";
import { colors } from './styles/styles.js';

export default function App() {
  
  //State variables
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [resultText, setResultText] = useState("");
  const [resultColor, setResutlColor] = useState("");

  const [isDarkstyle, setIsDarkStyle] = useState("false");
  const info = isDarkstyle ? "Switch to light theme" : "Switch to dark theme";
  const currentStyle = isDarkstyle ? Styles.containerDark : Styles.containerLight;


  const alcoholConcentration = () => {
    
  //Alert if weight is not inserted  
    if (! weight) {
      Alert.alert ("Warning!", "Your weight is missing.");
      return;
    }

  //Calculating permilles
  const gramsLeft = ((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time);

  let permilles;

  if (gender === "male") {
    permilles = gramsLeft / (weight * 0.7);
  }
  else {
    permilles = gramsLeft / (weight * 0.6);
  }
  
  if (permilles < 0) {
    permilles = 0;
  }
  
  //Result text and color
  let resultText, resultColor;
  if (permilles <= 0.0) {
    resultText = "You are safe to drive. Your alcohol concentration is " + permilles.toFixed(2) + "‰";
    resultColor = colors.color1;
  }
  else if (permilles <= 0.5 || permilles <= 0.22) {
    resultText = "You may be tipsy. Your blood alcohol concentration is " + permilles.toFixed(2) + "‰";
    resultColor = colors.color2;
  }
  else {
    resultText = "Do not drive! Your alcohol concentration is " + permilles.toFixed(2) + "‰";
    resultColor = colors.color3;
  }

  //Showing the result
  setResultText(resultText);
  setResutlColor(resultColor);
};


  return (
    <View style={currentStyle}>
      <ScrollView>

      {/*Switch button*/}
      <View style ={[Styles.switchPosition]}>
      <Text>{info}</Text>
      <Switch
      value = {isDarkstyle}
      onValueChange = {() => setIsDarkStyle(!isDarkstyle)}
      thumbColor="black"
      />
      </View>

      {/*Headline*/}
      <View style={Styles.headerPosition}>
      <Text style={Styles.header}>Alcometer</Text>
      </View>

      {/*Weight component */}
      <Text style ={Styles.subTitles}>Weight (kg)</Text>
      <TextInput style={Styles.submit}
      keyboardType='number-pad'
      onChangeText={setWeight}
      value={weight}
      placeholder={"Enter you weight (kg)"}/>

      {/*Radiobutton component */}
      <Text style = {Styles.subTitles}>Gender</Text>
      <View style = {{flexDirection: "row", justifyContent: "space-between", marginBottom: 20, marginTop: 20, marginLeft: 20, marginRight: 20}}>
      <RadioButton.Group onValueChange = {newValue => setGender(newValue)} value={gender}>
        <View>
          <RadioButton value = "female" color= "#a20d0d"/>
          <Text style = {Styles.radioButtonText}>Female</Text>
        </View>
        <View>
          <RadioButton value = "male" color = "#bd0f0f"/>
          <Text style = {Styles.radioButtonText}>Male</Text>
        </View>
      </RadioButton.Group>
      </View>

      {/*Bottles and hours component */}
      <Text style = {Styles.subTitles}>            Bottles                               Hours</Text>
  
      <View style ={[Styles.numInput]}>
      
      <NumericInput 
      minValue={0}
      value={bottles}
      onChange={v => setBottles(v)}
      rounded 
      borderColor = "#A1A499"
      rightButtonBackgroundColor={"#B0BBBF"}
      leftButtonBackgroundColor={"#B0BBBF"}/>

      <NumericInput  
      minValue={0}
      value ={time}
      onChange={v => setTime(v)}
      rounded
      borderColor = "#A1A499"
      rightButtonBackgroundColor={"#B0BBBF"}
      leftButtonBackgroundColor={"#B0BBBF"}/>
      </View>

      {/*Results component*/}
      <Text style = {{...Styles.subTitles, color: resultColor}}>{resultText}</Text>

      {/*Calculate component*/}
      <TouchableOpacity onPress={alcoholConcentration}>
          <Text style = {Styles.button}>CALCULATE</Text>
        </TouchableOpacity> 

      </ScrollView>
    </View>
  );
}


// colors wb E2D4B7, bb 9C9583, txt A1A499, B0BBBF, CADBC8

