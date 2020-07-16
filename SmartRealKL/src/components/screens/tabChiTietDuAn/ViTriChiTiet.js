import React,{ Component } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView,{PROVIDER_GOOGLE,Marker,Callout,Polygon} from 'react-native-maps';
import {ActionEditViTriChiTiet} from './../../../redux/actions';
import { connect } from 'react-redux';

const region={
    latitude: 10.769479,
    longitude:  106.74503,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  }
 class ViTriChiTiet extends Component{
    constructor(props){
        super(props);
        this.state={caodo:`${this.props.caodo}`,vido:`${this.props.vido}`};
    }
    render(){
  
        return(
            <View style={styles.container}>
               <View style={styles.headercontainer}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('KhamPha')}>
                       <Icon2 style={styles.iconback} name="back" color='black' size={26}></Icon2>
                   </TouchableOpacity>
                     <View style={{flex:3}}>
                        <Text style={styles.title}> Local </Text>
                     </View> 
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('XacNhanTT')}>
                       <Icon3 style={styles.iconbook} name="shopping-cart" color='black' size={26}></Icon3>
                   </TouchableOpacity>
               </View>
                <View style={styles.containerList}>
                {console.log(`Marker vi chi chi tiet ${JSON.stringify(this.props.vitri)}`)}
                        <MapView style={{flex:1,borderRadius:10}}
                        region={region}
                        showsUserLocation={true}>
                          {this.props.vitri.map(marker=>(
                            <Marker 
                            key={marker.IDCanHo}
                            coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                            
                            >
                                <Callout>
                                <View style={{flexDirection:"row"}}>
                                    <Image style={styles.containerImage}
                                       source={{uri:marker.HinhAnh}}>
                                     </Image>
                                     <View>
                                      <Text style={styles.txtTenCanHo}>{marker.TenCanHo}</Text>
                                      <Text style={styles.txtDiaChi}>Address :{marker.DiaChi}</Text>
                                     </View>
                                </View>
                                </Callout>
                            </Marker>
                        ))}
                        </MapView>
                            
                </View>

            </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer
        
        token:state.dangNhapReducers.token,
        admin:state.dangNhapReducers.admin,
        vitri:state.vitriChiTietReducers.viTriCT,
        vido:state.vitriChiTietReducers.vido,
        caodo:state.vitriChiTietReducers.caodo,
        IDCanHo:state.canHoReducers.idCanHo,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onEditViTri:(inputViTriChiTiet)=>{
            dispatch(ActionEditViTriChiTiet(inputViTriChiTiet));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ViTriChiTiet)
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F2C94D',
        flex:1,
        flexDirection:'column'
    },
    containerinfomation:{
        flexDirection:'row',
        flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#CB9D31",
    },
    containerList:{
       flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#CB9D31",
    },
    imagescontainer:{
        width:140,
        height:95,
        backgroundColor:"#F2C94D",
        borderRadius:5,
        borderWidth: 1,
    },
    textInfomation:{
        fontWeight:'bold',
        fontSize:18,
    },
    containerImage:{
        width:140,
        height:95,
        borderRadius:5
    },
    headercontainer:{
        flex:0.1,
        flexDirection:"row",
        backgroundColor:"#CB9D31",
        alignItems:'center' 
    },
    iconback:{
        marginLeft:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center',
        justifyContent:'center', 
       
    },
    iconbook:{
         marginRight:10,
    },
    txtTenCanHo:{
        fontSize:20,
        fontWeight:'bold',fontSize:20,
        fontWeight:'bold',
    },
    txtDiaChi:{
         fontSize:15,
         fontStyle: 'italic',
         width:250
    },
    containeradmin:{
        position:'absolute',
        bottom:10,
        left:17,
        right:17,
        height:100,
        backgroundColor:"#CB9D31",
        borderRadius:5,
        flexDirection:'row'
    },
    thongtincontainer:{
        flexDirection:"row",margin:5,
        backgroundColor:"#f7c025",
        height:40,
        alignContent:'center'
    },
    textadmin:{
        fontSize:17,
        alignSelf:'center',
        marginLeft:5
    },
    inputadmin:{
        backgroundColor:"#CB9D31",
        flex:1,
        margin:2
    }


})
////#CB9D31
// const appBlue = '#29b6f6';
// const appYellow = '#f7c025';
// const appRed = '#EC4434';
// const appPink = '#fe4d82';
// const appYellow2 = '#CB9D31';
// const appblue2 = '#3C4856';
{/* <View style={{flex:0.2}}> 
                   
<TouchableOpacity onPress={()=> {
    const {caodo,vido}=this.state;
          if (!caodo.length || !vido.length){
            alert('you must  enter  longitude and latitude')
            return; 
          }
    const token=this.props.token;
    const IDCanHo=this.props.IDCanHo
  
    console.log(`token ${this.props.token}`)
    this.props.onEditViTri({token,IDCanHo,caodo,vido})
    }}>
    <Icon4 name="content-save-edit-outline" color='#EC4434' size={50} style={{margin:10}}></Icon4>
</TouchableOpacity>

</View>  */}