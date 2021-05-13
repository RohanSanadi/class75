import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput, KeyboardAvoidingView,Alert,Image } from 'react-native';
import * as firebase from 'firebase'
import db from '../config'
export default class LoginScreen extends React.Component {
    constructor(){
        super();
        this.state = {
        emailId:'',
        password:'',

        }
    }
    login=async(email,password)=>{
        if(email&&password){
            try{
                const respons=await firebase.auth().signInWithEmailAndPassword(email,password)
                if(respons){
                    this.props.navigation.navigate("Transation")
                }
            }
            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        Alert.alert("user dosn't exsit")
                        break
                    case 'auth/invild-email':
                        Alert.alert("incorect email ID or password ")
                        break
                        }
            }
        }else{Alert.alert('enter corect user id and password')}
    }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center',marginTop:20,}}>
                <View>
                <Image source={require("../assets/booklogo.jpg")
                } style={{width:200,height:200}}/>
            <Text style={{textAlign:'center',fontSize:30}}>willy</Text>
                </View>
                <View>
                    <TextInput style={styles.loginBox}
                     placeholder='abc@example.com'
                     keyboardType="email-address"
                     onChangeText={(text)=>{
                         this.setState({emailId:text})
                     }}/>
                     
                     <TextInput style={styles.loginBox}
                     placeholder='abc@example.com'
                     secureTextEntry={true}
                     onChangeText={(text)=>{
                         this.setState({password:text})
                     }}
                     
                                          />
                </View>
                <View>
                    <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}>
                    <Text style={{textAlign:'center'}}>
                        Login
                    </Text>
                    </TouchableOpacity>
                    </View>     
    
    
         </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({loginBox:{
    width:300,
    height:40,
    borderWidth:1.5,
    fontSize:20,
    margin:10,
    paddingLeft:10
}})
