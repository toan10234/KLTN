import React,{ Component } from "react";
import { Text,View ,TextInput,TouchableOpacity,StyleSheet,Image,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
export default class DangKi extends Component{
    render(){
        return(
            
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.logocontainer}>
                    <Image style={styles.logo}
                        source={require('./../../assets/images/logoSmart.png')}>
                        </Image>
                        
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.infoContainer}>
                     <View style={styles.coverContainer}>
                      
                            <IconFeather style={styles.iconContainer} name="user" color='#CB9D31' size={26} />
                            <Text style={styles.symbol}>|</Text>
                            <TextInput style={styles.input}
                            placeholder="Enter name ..."
                            placeholderTextColor='#F2C94D'
                            returnKeyType='next'
                            autoCorect={false}
                            onSubmitEnding={()=>this.txtPassword.focus()}
                            >
                            </TextInput>
                        
                    </View>
                    
                    <View style={styles.coverContainer}>
                      
                            <Icon style={styles.iconContainer} name="email-outline" color='#CB9D31' size={26} />
                            <Text style={styles.symbol}>|</Text>
                            <TextInput style={styles.input}
                            placeholder="Enter email ..."
                            placeholderTextColor='#F2C94D'
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorect={false}
                            onSubmitEnding={()=>this.txtPassword.focus()}
                            >
                            </TextInput>
                        
                    </View>
                    <View style={styles.coverContainer}>
                        <Icon style={styles.iconContainer} name="lock-outline" color='#CB9D31' size={26} />
                        <Text style={styles.symbol}>|</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter passwork ..."
                        placeholderTextColor='#F2C94D'
                        returnKeyType='go'
                        autoCorect={false}
                        secureTextEntry
                        ref={"txtPassword"}
                        >
                        </TextInput>
                    </View>
                   
                    <TouchableOpacity style={styles.buttoncontainer}
                    onPress={() => this.props.navigation.navigate('DangKi2')}>
                        <Text style={styles.btntext}>Next</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </View>
            
            </TouchableWithoutFeedback>
            
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2C94D',
        flexDirection:'column',
    },
    logocontainer:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center',
   
    },
    logo:{
        width:130,
        height:170,
    },
    infoContainer:{
        position:'absolute',
        left:0,
        right:0,
        bottom:10,
        height:200,
        
    },
    input:{
        height:40,
        backgroundColor:'rgba(0,0,0,0)',
        fontStyle: 'italic',
        color:'#fff',
        
    },
    buttoncontainer:{
        backgroundColor:'#3C4856',
        justifyContent:'center',
        height:40,
        marginTop:15,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        borderWidth: 2,
    },
    btntext:{
        textAlign:'center',
        alignItems:'center', 
        color:'#F2C94D',
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize:20
    },
    coverContainer:{
        flexDirection:"row",
        height:40,
        backgroundColor:"#3C4856",
        borderRadius:5,
        borderWidth: 1,
        marginTop:7,
        marginLeft:10,
        marginRight:10,
    },
    iconContainer:{
        alignSelf:'center',
        marginLeft:5,
        marginRight:5,
    },
    symbol:{
        alignSelf:'center',
        fontSize:20,
        color:"#F2C94D"
    }
   
})