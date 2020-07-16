import React,{ Component } from "react";
import { Text,View ,TextInput,TouchableOpacity,StyleSheet,Image,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import { connect } from "react-redux";
import {ActionDangKi1} from "../../redux/actions";
class DangKi extends Component{
    constructor(props){
        super(props);
        this.state={username:'',password:'',email:''};
    }
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
                            onChangeText={(text) => this.setState({username:text})}
                            value={this.state.username}
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
                            onChangeText={(text) => this.setState({email:text})}
                            value={this.state.email}
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
                        onChangeText={(text) => this.setState({password:text})}
                        value={this.state.password}
                        >
                        </TextInput>
                    </View>
                   
                    <TouchableOpacity style={styles.buttoncontainer}
                    onPress={() =>{
                        const {username,password,email}=this.state;
                              if (!username.length || !password.length || !email.length){
                                alert('you must  enter  username ,email and password ')
                                return; 
                              }
                              this.props.onDangKi1({username,password,email});
                            this.props.navigation.navigate('DangKi2')}}>
                        <Text style={styles.btntext}>Next</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </View>
            
            </TouchableWithoutFeedback>
            
        );
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer
        // ketqua:state.canHoReducers.ketqua,
        // loading:state.canHoReducers.loading,
        // err:state.canHoReducers.err,
        // mang:state.canHoReducers.mang,
        // token:state.dangNhapReducers.token,
        // admin:state.dangNhapReducers.admin,
        // idTK:state.dangNhapReducers.idTK,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDangKi1:(inputTK)=>{
            dispatch(ActionDangKi1(inputTK));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(DangKi);
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