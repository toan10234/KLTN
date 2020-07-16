import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native'
import { connect } from "react-redux";
import {ActionDoiMatKhau} from './../../../redux/actions';
 class DoiMatKhau extends Component {

    constructor(props){
        super(props);
        this.state={newpassword:'',renewpassword:''};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containertitle}>
                    <Text style={styles.title}>Change password</Text>
                </View>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.containerinfomation}>
                 <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>Old password :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter password ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                     
                        />
                   </View>
                   <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>New password :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter password ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        onChangeText={(text) => this.setState({newpassword:text})}
                        value={this.state.newpassword}
                        />
                   </View>
                   <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>Retype password :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter password ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        onChangeText={(text) => this.setState({renewpassword:text})}
                        value={this.state.renewpassword}
                        />
                   </View>
                   <View style={styles.containerbtn}>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('CaNhan')}>
                        <Text style={styles.textbtn}>Cancel</Text>
                        
                   </TouchableOpacity>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => {
                            const {newpassword,renewpassword}=this.state;
                              const idTK=this.props.idTK;
                              const token=this.props.token;
                              if (!newpassword.length || !renewpassword.length ){
                                alert('you must  enter new password and retype password')
                                return; 
                              }
                              if(renewpassword!=newpassword){
                                alert('you must  enter new password same retype password')
                                return; 
                              }
                             
                              this.props.onDoiMatkhau({idTK,token,newpassword});
                              
                             this.props.navigation.navigate('DangNhap')}}>
                        <Text style={styles.textbtn}>Confirm</Text>
                   </TouchableOpacity>
                </View>
                </View>

                
                </KeyboardAvoidingView>
            </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer    
        token:state.dangNhapReducers.token,
        idTK:state.dangNhapReducers.idTK,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDoiMatkhau:(inputDoiMatKhau)=>{
            dispatch(ActionDoiMatKhau(inputDoiMatKhau));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(DoiMatKhau)
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F2C94D',
        flex:1,
        flexDirection:'column'
    },
    containertitle:{
        height:55,
        justifyContent:"center" ,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        elevation:5,
    
    },
    containerinfomation:{
        position:"absolute",
        left:10,
        right:10,
        bottom:40,
        height:300,
        
        borderRadius:5,
        elevation:5,
        justifyContent:'center',
        backgroundColor:"#CB9D31",
    },
    title:{
         textAlign:'center',
        fontWeight:'bold',
         fontSize:20,
        color:"black",
    },
    containerbtn:{
        flexDirection:'row',
        flex:0.1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        justifyContent:"space-around",
      
    },
    button:{
        height:40,
        width:120,
        margin:5,
        borderRadius:5,
        borderWidth: 2,
        elevation:2,
        justifyContent:"center" ,
    },
    textbtn:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        color:"black",
    },
    containerinput:{
        flexDirection:'row',
        flex:0.2,
        borderRadius:5,
        margin:10,
        backgroundColor:"#F2C94D"
    },
    titleinput:{
        fontStyle: 'italic',
        fontSize:16,
        alignSelf:'center',
        margin:5,
    },
    input:{
        flex:1,
        borderRadius:5,
        color:"black",
        fontSize:16,
        margin:4,
        alignSelf:'center',
        backgroundColor:'#3C4856'
    }
})
