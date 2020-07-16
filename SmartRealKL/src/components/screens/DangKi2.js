import React,{ Component } from "react";
import { Text,View ,TextInput,TouchableOpacity,StyleSheet,Image,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import { connect } from "react-redux";
import {ActionDangKi2} from '../../redux/actions';
 class DangKi2 extends Component{
    constructor(props){
        super(props);
        this.state={hovaten:'',sodienthoai:'',diachi:''};
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
                            onChangeText={(text) => this.setState({hovaten:text})}
                            value={this.state.hovaten}
                            >
                            </TextInput>
                        
                    </View>
                      <View style={styles.coverContainer}>
                      
                            <IconFeather style={styles.iconContainer} name="phone" color='#CB9D31' size={26} />
                            <Text style={styles.symbol}>|</Text>
                            <TextInput style={styles.input}
                            placeholder="Enter phone ..."
                            placeholderTextColor='#F2C94D'
                            keyboardType='numeric'
                            returnKeyType='next'
                            autoCorect={false}
                            onSubmitEnding={()=>this.txtPassword.focus()}
                            onChangeText={(text) => this.setState({sodienthoai:text})}
                            value={this.state.sodienthoai}
                            >
                            </TextInput>
                        
                    </View>
                    <View style={styles.coverContainer}>
                      
                            <Icon2 style={styles.iconContainer} name="location" color='#CB9D31' size={26} />
                            <Text style={styles.symbol}>|</Text>
                            <TextInput style={styles.input}
                            placeholder="Enter address ..."
                            placeholderTextColor='#F2C94D'
                            keyboardType='email-address'
                            returnKeyType='next'
                            autoCorect={false}
                            onSubmitEnding={()=>this.txtPassword.focus()}
                            onChangeText={(text) => this.setState({diachi:text})}
                            value={this.state.diachi}
                            >
                            </TextInput>
                        
                    </View>
                    <TouchableOpacity style={styles.buttoncontainer}
                    onPress={() =>{
                        const {hovaten,sodienthoai,diachi}=this.state;
                              if (!hovaten.length || !sodienthoai.length || !diachi.length){
                                alert('you must  enter  name ,phone and address ')
                                return; 
                              }
                              const idtk=this.props.idTK;
                              const email=this.props.email;
                              console.log(`id tk :${idtk}`)
                              this.props.onDangKi2({hovaten,sodienthoai,diachi,idtk,email});
                         this.props.navigation.navigate('DangNhap')}}>
                        <Text style={styles.btntext}>Sign Up</Text>
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
        idTK:state.dangkiReducers.idTK,
        email:state.dangkiReducers.email,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDangKi2:(inputDangKi2)=>{
            dispatch(ActionDangKi2(inputDangKi2));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(DangKi2);
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