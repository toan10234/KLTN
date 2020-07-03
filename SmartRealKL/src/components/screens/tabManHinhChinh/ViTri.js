import React,{ Component } from "react";
import { View,Text ,StyleSheet,Image} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import MapView,{PROVIDER_GOOGLE,Marker,Callout,Polygon} from 'react-native-maps';
import ViTricoordinate from './../../../assets/data/Vitricoordinate';
const COORDINATES = [
  { latitude: 37.8025259, longitude: -122.4351431 },
  { latitude: 37.7896386, longitude: -122.421646 },
  { latitude: 37.7665248, longitude: -122.4161628 },
  { latitude: 37.7734153, longitude: -122.4577787 },
  { latitude: 37.7948605, longitude: -122.4596065 },
  { latitude: 37.8025259, longitude: -122.4351431 },
];
const region={
  latitude: 10.769479,
  longitude:  106.74503,
  latitudeDelta: 0.3,
  longitudeDelta: 0.3,
}
export default class ViTri extends Component{
     render(){
        return(
            <View style={styles.container}>
            
                <View style={styles.containerinfomation}>
                    <View style={styles.imagescontainer}>
                        <Image style={styles.containerImage}
                        source={require('../../../assets/images/nha1.png')}>
                        </Image>
                    </View>
                    <Text style={styles.textInfomation}> Infomation</Text>
                </View>
                <View style={styles.containerList}>
                    <MapView style={{flex:1,borderRadius:10}}
                    provider={PROVIDER_GOOGLE}
                    region={region}
                    showsUserLocation={true}>
                        {ViTricoordinate.map(marker=>(
                            <Marker 
                            key={marker.IDCanHo}
                            coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
                            
                            >
                                <Callout onPress={() => {this.props.navigation.navigate('ChiTietDuAn')}}>
                                <View style={{flexDirection:"row"}}>
                                    <Image style={styles.containerImage}
                                       source={{uri:marker.HinhAnh}}>
                                     </Image>
                                     <View>
                                      <Text>{marker.TenCanHo}</Text>
                                      <Text>Address :{marker.DiaChi}</Text>
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
       flex:0.8,
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
    }
})