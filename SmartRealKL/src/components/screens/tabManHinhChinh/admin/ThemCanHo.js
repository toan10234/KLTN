import React, { Component } from 'react'
import { View, Text ,StyleSheet,ScrollView,TextInput,TouchableOpacity} from 'react-native'
import {ActionThemCanHo} from '../../../../redux/actions';
import { connect } from 'react-redux'

 class ThemCanHo extends Component {
   
    constructor(props){
        super(props);
        this.state={tencanho:'',hinhanh:'',thongtin:'',giatien:'',diachi:'',dientich:'',
        chieudai:'',chieurong:'',sotang:'',phongngu:'',chodexe:''};
    }
     // data.tencanho,data.hinhanh,data.thongtin,data.giatien,data.diachi,
        // data.dientich,data.chieudai,data.chieurong,
        // data.sotang,data.phongngu,data.chodexe
    render() {
        return (
            <ScrollView style={styles.container}>
                 <View style={styles.container}>
                    <Text style={styles.textheader}> Add new apartment </Text>
                    <View style={styles.containerthongtin}>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Name :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({tencanho:text})}
                            value={this.state.tencanho}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Image :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({hinhanh:text})}
                            value={this.state.hinhanh}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Infor   :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({thongtin:text})}
                            value={this.state.thongtin}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Price   :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({giatien:text})}
                            value={this.state.giatien}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}>Address:</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({diachi:text})}
                            value={this.state.diachi}>
                            </TextInput>
                        </View>
                      
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Sq.FT :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({dientich:text})}
                            value={this.state.dientich}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Depth :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({chieudai:text})}
                            value={this.state.chieudai}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Width  :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({chieurong:text})}
                            value={this.state.chieurong}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}> Stories :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({sotang:text})}
                            value={this.state.sotang}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}>  Beds :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({phongngu:text})}
                            value={this.state.phongngu}>
                            </TextInput>
                        </View>
                        <View style={styles.containerinfo}>
                            <Text style={styles.txtinfor}>Garage :</Text>
                            <TextInput style={styles.txtinput}
                            onChangeText={(text) => this.setState({chodexe:text})}
                            value={this.state.chodexe}>
                            </TextInput>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row', justifyContent:"space-around",marginTop:10}}>
                    <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('KhamPha')}>
                        <Text style={styles.textbtn}>Cancel</Text>
                        
                   </TouchableOpacity>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => {
                             const {tencanho,hinhanh,thongtin,giatien,diachi,dientich,chieudai,chieurong,
                                sotang,phongngu,chodexe}=this.state;
                           
                                const token=this.props.token;
                               if (!tencanho.length || !hinhanh.length ||!thongtin.length || !giatien.length ||!diachi.length || !dientich.length ||!chieudai.length || !chieurong.length ||!sotang.length || !phongngu.length ||!chodexe.length){
                                 alert('you must  enter full infomation')
                                 return; 
                               }
                              this.props.onThemCanHo({token,tencanho,hinhanh,thongtin,giatien,diachi,dientich,chieudai,chieurong,sotang,phongngu,chodexe});
                              //this.props.navigation.navigate('DangNhap')
                              }}>
                        <Text style={styles.textbtn}>Confirm</Text>
                   </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
            

        )
    }
}

const mapStateToProps = (state) => ({
    token:state.dangNhapReducers.token,
})


const mapDispatchToProps=(dispatch)=>{
    return{
        onThemCanHo:(inputThemCanHo)=>{
            dispatch(ActionThemCanHo(inputThemCanHo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemCanHo)
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2C94D',
    },
    textheader:{
        fontSize:30,
        alignSelf:"center"
    },
    txtinput:{
        height:40,
        width:290,
        backgroundColor:'rgba(255,255,255,0.5)',
        marginLeft:5,
        borderRadius:3
    },
    txtinfor:{
        fontSize:18,
        width:75
    },
    containerinfo:{
        flexDirection:'row',
        height:48,
        backgroundColor:"#3C4856",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        marginTop:5
    },
    containerthongtin:{
        marginLeft:5,
        marginRight:5,
        marginTop:15,
        backgroundColor:"#CB9D31",
        borderRadius:5
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
 
})