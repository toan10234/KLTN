import React,{ Component } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,
    ImageBackground,
 } from 'react-native';
 import {connect} from 'react-redux'
 
class CaNhan extends Component{
  
    
     
      render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.containerinfomation}>
                <ImageBackground source={require('../../../assets/images/anh-bia.jpg')} style={{flex: 1,resizeMode: "center", justifyContent: "center",borderRadius:5}}>
                    <View style={styles.imagescontainer}>
                        <Image style={styles.imagesavatar} source={require('../../../assets/images/avatar.jpg')} />
                        <View   style={styles.containerprofile}>
                            <Text style={{fontSize:15,fontWeight:'bold'}}>{this.props.thongtinTK[0].HoVaTen}</Text>
                            <Text style={{fontSize:13}}>{this.props.thongtinTK[0].Email}</Text>
                            <Text style={{fontSize:13}}>{this.props.thongtinTK[0].SoDienThoai}</Text>
                        </View>
                    </View>
                </ImageBackground>
                </View>
       
                <View style={styles.containerList}>
                   <TouchableOpacity style={styles.buttoncontainer}
                         onPress={() => this.props.navigation.navigate('DoiMatKhau')}>
                        <Text style={styles.btntext}>Change password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttoncontainer}
                         onPress={() => this.props.navigation.navigate('ThongTinCaNhan')}>
                        <Text style={styles.btntext}>Change profile</Text>
                    </TouchableOpacity>
                     
                    <View style={{flex:0.6, alignItems:'center',justifyContent:"center" ,}}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>Infomation application and support</Text>
                        <Text> version 1.0.0 </Text>
                    </View>
                    <TouchableOpacity style={styles.btnSinout}
                         onPress={() => this.props.navigation.navigate('DangNhap')}>
                        <Text style={styles.btntextSignout}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        thongtinTK:state.thongTinTKReducers.thongtinTK,
    }
}
export default connect(mapStatetoProps)(CaNhan);


const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F2C94D',
        flex:1,
        flexDirection:'column'
    },
    containerinfomation:{
        // alignItems:'center',
        justifyContent:"center" ,
        flex:0.4,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#CB9D31",
    },
    containerList:{
       flex:0.8,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#CB9D31",
    },
    imagescontainer:{
        flexDirection:'row',
        marginLeft:20,
        width:110,
        height:110,
        borderRadius:55,
        borderWidth: 1,
    },
    textInfomation:{
        fontWeight:'bold',
        fontSize:18,
    },
    imagesavatar:{
        width:110,
        height:110,
        borderRadius:55,
        borderWidth: 1,
    },
    containerprofile:{
        justifyContent:"center",
        flexDirection:'column',
        backgroundColor:"rgba(0,0,0,0)",
        marginLeft:10,
    },
    buttoncontainer:{
        flex:0.12,
        backgroundColor:'#3C4856',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:1,
        marginLeft:5,
        marginRight:5,
        marginTop:5,
    },
    btntext:{
        fontSize:20,
        color:"#CB9D31",
        justifyContent:"center",
        textAlign:'center',
    },
    btnSinout:{
        flex:0.12,
        backgroundColor:'red',
        justifyContent:'center',
        borderRadius:5,
        borderWidth:1,
        marginLeft:5,
        marginRight:5,
        marginTop:5,
    },
    btntextSignout:{
        fontSize:20,
        color:"black",
     
        textAlign:'center',
        fontWeight:'bold',
    },
})