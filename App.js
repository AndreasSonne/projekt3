import React,{Component} from 'react';
import {View } from 'react-native';
import firebase from 'firebase';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {Page1, Page3} from "./Components/Screens";
import Page2 from "./Components/Page2";
import {createStackNavigator} from '@react-navigation/stack';

const ButtonNavigator = createBottomTabNavigator();

const AuthStack1 = createStackNavigator();
const Side1 =() =>(
    <AuthStack1.Navigator>
      <AuthStack1.Screen name = "side1" component={Page1} options={{title: 'Hoved menu'}}/>
    </AuthStack1.Navigator>
)

const AuthStack2 = createStackNavigator();
const Side2 =() =>(
    <AuthStack2.Navigator>
      <AuthStack2.Screen name = "side2" component={Page2} options={{title: 'Tilføj ramme'}}/>
    </AuthStack2.Navigator>
)

const AuthStack3 = createStackNavigator();
const Side3 =() =>(
    <AuthStack3.Navigator>
      <AuthStack3.Screen name = "side3" component={Page3} options={{title: 'Om os'}}/>
    </AuthStack3.Navigator>
)

export default class App extends Component{
  componentWillMount() {
      const firebaseConfig = {
          apiKey: "AIzaSyD52rVEOdo1vp6ZzHXEBPar3p5YTW4OllI",
          authDomain: "ovelse6db-9a8ed.firebaseapp.com",
          databaseURL: "https://ovelse6db-9a8ed.firebaseio.com",
          projectId: "ovelse6db-9a8ed",
          storageBucket: "ovelse6db-9a8ed.appspot.com",
          messagingSenderId: "905568011444",
          appId: "1:905568011444:web:b60cfda4fe47ce9fc103e1"
      };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render(){
    return(
        <NavigationContainer>
          <ButtonNavigator.Navigator>
            <ButtonNavigator.Screen name="Home" component={Side1}/>
            <ButtonNavigator.Screen name="Bestil" component={Side2}/>
            <ButtonNavigator.Screen name="Om os" component={Side3}/>
          </ButtonNavigator.Navigator>
        </NavigationContainer>
    )
  }
};
