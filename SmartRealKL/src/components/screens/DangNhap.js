import React,{ Component } from "react";
import { Text,View ,TextInput,SafeAreaView,TouchableOpacity,StyleSheet,Image,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from "react-redux";

import {DangNhapAction}from './../../redux/actions';
// import { Field , reduxForm} from 'redux-form';
// const renderField=({keyboardType,name})=>{
//     return(
//         <TextInput style={styles.input} keyboardType={keyboardType}>

//         </TextInput>
//     );
// };
 class DangNhap extends Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''};
    }
    render(){
        const {handleSubmit}=this.props;
        return(
            <SafeAreaView style={styles.container}>
            
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
                      
                            <Icon style={styles.iconContainer} name="email-outline" color='#CB9D31' size={26} />
                            <Text style={styles.symbol}>|</Text>
                            <TextInput style={styles.input}
                            placeholder="Enter username ..."
                            placeholderTextColor='#F2C94D'
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorect={false}
                            onSubmitEnding={()=>this.txtPassword.focus()}
                            onChangeText={(text) => this.setState({username:text})}
                            value={this.state.username}
                            >
                            </TextInput>
                        
                    </View>
                    <View style={styles.coverContainer}>
                        <Icon style={styles.iconContainer} name="lock-outline" color='#CB9D31' size={26} />
                        <Text style={styles.symbol}>|</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter password ..."
                        placeholderTextColor='#F2C94D'
                        returnKeyType='go'
                        autoCorect={false}
                        secureTextEntry
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                        ref={"txtPassword"}
                        >
                        </TextInput>
                    </View>
                    <Text></Text>
                    <TouchableOpacity style={styles.buttoncontainer}
                              //   onPress={() => this.props.navigation.navigate('ManHinhChinh')}
                              onPress={() => {
                              const {username,password}=this.state;
                              if (!username.length || !password.length){
                                alert('you must  enter  usernam and password')
                                return; 
                              }
                              this.props.onDangNhap({username,password});
                              this.props.navigation.navigate('ManHinhChinh')
                              }}
                         >
                        <Text style={styles.btntext}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </View>
            
            </TouchableWithoutFeedback>
           
            </SafeAreaView>
        );
    }
}
const mapStatetoProps=(state)=>{
    return{
        //kết quả lấy từ reducer
        idtk:state.dangNhapReducers.idtk,
        err:state.dangNhapReducers.err,
        ketqua:state.dangNhapReducers.ketqua
       
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDangNhap:(inputTK)=>{
            dispatch(DangNhapAction(inputTK));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(DangNhap)

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
        height:165,
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