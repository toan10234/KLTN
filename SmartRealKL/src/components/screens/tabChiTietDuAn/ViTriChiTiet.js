import React,{ Component } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';

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
  longitude:  106.544503,
  latitudeDelta: 0.09,
  longitudeDelta: 0.09,
}
export default class ViTriChiTiet extends Component{
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
                   
                        <MapView style={{flex:1,borderRadius:10}}
                        region={region}
                        showsUserLocation={true}>
                         
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
    }

})