import React,{ Component } from "react";
import { View,Text ,StyleSheet,Image} from 'react-native';

import MapView,{PROVIDER_GOOGLE,Marker,Callout,Polygon} from 'react-native-maps';
//import ViTricoordinate from './../../../assets/data/Vitricoordinate';
import { connect } from 'react-redux';
import {ActionGoToChiTiet} from './../../../redux/actions';


const region={
  latitude: 10.769479,
  longitude:  106.74503,
  latitudeDelta: 0.3,
  longitudeDelta: 0.3,
}
 class ViTri extends Component{
     render(){
        return(
            <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.txtheader}> Local </Text>
            </View>
                <View style={styles.containerList}>
                    <MapView style={{flex:1,borderRadius:10}}
                    provider={PROVIDER_GOOGLE}
                    region={region}
                    showsUserLocation={true}>
                        {this.props.mangViTri.map(marker=>(
                            <Marker 
                            key={marker.IDCanHo}
                            coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                            
                            >
                                <Callout onPress={() => {
                                    const IDCanHo=marker.IDCanHo;
                                    this.props.gotoChitiet(IDCanHo)
                                    this.props.navigation.navigate('ChiTietDuAn')}}>
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
    
        loading:state.viTriReducers.loading,
        err:state.viTriReducers.err,
        mangViTri:state.viTriReducers.mangViTri,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        gotoChitiet:(IDCanHo)=>{
            dispatch(ActionGoToChiTiet(IDCanHo))
        }
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ViTri);

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F2C94D',
        flex:1,
        flexDirection:'column'
    },
    containerinfomation:{
        flexDirection:'row',
        flex:0.2,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#CB9D31",
    },
    containerList:{
       flex:0.9,
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
    header:{
        
       flex:0.09,
       justifyContent:"center" ,
       marginTop:5,
       marginLeft:5,
       marginRight:5,
       borderRadius:5,
       elevation:5,
       alignContent:"center"
   },
   txtheader:{
       textAlign:'center',
       fontWeight:'bold',
        fontSize:25,
       color:"black",
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
   }
})