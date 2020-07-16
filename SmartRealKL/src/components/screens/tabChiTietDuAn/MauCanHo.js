import React,{ Component } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { WebView } from 'react-native-webview';

export default class MauCanHo extends Component{
    render(){
        return(
           <View style={{flex:1, backgroundColor:"#F2C94D"}}>
                <View style={styles.headercontainer}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('KhamPha')}>
                       <Icon2 style={styles.iconback} name="back" color='black' size={26}></Icon2>
                   </TouchableOpacity>
                     <View style={{flex:3}}>
                        <Text style={styles.title}> Apartment </Text>
                     </View> 
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('XacNhanTT')}>
                       <Icon3 style={styles.iconbook} name="shopping-cart" color='black' size={26}></Icon3>
                   </TouchableOpacity>
               </View>
               <View style={{flex:1}}>
                <WebView 
                    source={{
                    uri: 'http://192.168.5.4:62153/'
                }}
                style={{ marginTop: 20}}
             />
                </View>
           </View>
        )
    }
}
const styles=StyleSheet.create({
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