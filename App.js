import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, ScrollView, StyleSheet, Switch, Text, View, Alert } from 'react-native';
import NumericInput from "react-native-numeric-input";
import { RadioButton, TextInput } from 'react-native-paper';
import Styles from "./styles/styles.js";

export default function App() {
  
  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");

  const alcoholConcentration = () => {
    if (! weight) {
      Alert.alert ("Warning!", "Please enter you weight");
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
  console.log (permilles)
};

  


  return (
    <View style={Styles.container}>
      <ScrollView>
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
      onChangeText={setWeight}
      value={weight}
      placeholder={"Enter you weight (kg)"}/>

            {/*Radiobutton component */}
      <Text style = {Styles.subTitles}>Gender</Text>
      <RadioButton.Group onValueChange = {newValue => setGender(newValue)} value={gender}>
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
       <Text> Alcohol level is {}</Text>

      {/*Calculate component*/}
      <TouchableOpacity onPress={alcoholConcentration}>
          <Text style = {Styles.button}>CALCULATE</Text>
        </TouchableOpacity> 


      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}


// colors wb E2D4B7, bb 9C9583, txt A1A499, B0BBBF, CADBC8

