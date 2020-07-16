import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity,TextInput,KeyboardAvoidingView } from 'react-native'
import { connect } from "react-redux";
import {ActionDoiThongTin} from './../../../redux/actions';
class ThongTinCaNhan extends Component {
    constructor(props){
        super(props);
        this.state={hovaten:`${this.props.hovaten}`,email:`${this.props.email}`,sodienthoai:`${this.props.sodienthoai}`,diachi:`${this.props.diachi}`};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containertitle}>
                    <Text style={styles.title}>Change profile</Text>
                </View>

                <View style={styles.containerinfomation}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View>
                <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>Name</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter Name ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        onChangeText={(text) => this.setState({hovaten:text})}
                        value={this.state.hovaten}
                        />
                   </View>
                   <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>phone:</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter phone ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        onChangeText={(text) => this.setState({sodienthoai:text})}
                        value={this.state.sodienthoai}
                        />
                   </View>
                   <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>Email :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter email ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        onChangeText={(text) => this.setState({email:text})}
                        value={this.state.email}
                        />
                   </View>
                   <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>Adress :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter address ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        onChangeText={(text) => this.setState({diachi:text})}
                        value={this.state.diachi}
                        />
                   </View>
                </View>
                </KeyboardAvoidingView>
                 
                </View>
                <View style={styles.containerbutton}>
                <View style={styles.containerbtn}>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('CaNhan')}>
                        <Text style={styles.textbtn}>Cancel</Text>
                        
                   </TouchableOpacity>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => {
                            const {hovaten,email,sodienthoai,diachi}=this.state;
                              const idThongTinTK=this.props.idThongTinTK;
                              const token=this.props.token;
                              const idTK=this.props.idTK
                              if (!hovaten.length || !email.length||!sodienthoai.length || !diachi.length ){
                                alert('you must  enter full infomation')
                                return; 
                              }
                              this.props.onDoiThongTin({hovaten,email,sodienthoai,diachi,idThongTinTK,token,idTK});
                               this.props.navigation.navigate('CaNhan')
                            }}>
                        <Text style={styles.textbtn}>Confirm</Text>
                   </TouchableOpacity>
                </View>
                </View>
            </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer    
        token:state.dangNhapReducers.token,
        idThongTinTK:state.thongTinTKReducers.idThongTinTK,
        hovaten:state.thongTinTKReducers.hovaten,
        sodienthoai:state.thongTinTKReducers.sodienthoai,
        email:state.thongTinTKReducers.email,
        diachi:state.thongTinTKReducers.diachi,
        idTK:state.dangNhapReducers.idTK
       
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDoiThongTin:(inputDoiThongTin)=>{
            dispatch(ActionDoiThongTin(inputDoiThongTin));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ThongTinCaNhan)
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F2C94D',
        flex:1,
        flexDirection:'column'
    },
    containertitle:{
        flex:0.1,
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
        bottom:70,
        height:280,
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
        height:50,
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
    },
    containerbutton:{
        position:"absolute",
        left:10,
        right:10,
        bottom:40,
        height:60,
        elevation:5,
        justifyContent:'center',
     
    }
})
