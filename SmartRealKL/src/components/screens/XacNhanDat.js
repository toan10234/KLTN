import React, { Component } from 'react'
import { Text, View ,Image ,StyleSheet,TouchableOpacity} from 'react-native'

export default class XacNhanDat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                   <Image style={styles.logo}
                    source={require('../../assets/images/nha1.png')}/>
                </View>
                <View style={styles.infomationcontainer}>
                    <Text style={styles.textcontainer}>Apartment name :</Text>
                    <Text style={styles.textcontainer}>Apartment price :</Text>
                    <Text style={styles.textcontainer}>Furniture price :</Text>
                    <Text style={styles.textcontainer}>Terms of payment :</Text>
                </View>
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('XacNhanTT')}>
                        <Text style={styles.textbtn}>Cancel</Text>
                        
                   </TouchableOpacity>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('XacNhanDat')}>
                        <Text style={styles.textbtn}>Book now</Text>
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2C94D'
    },
    imagecontainer:{
        flex:0.4,
         justifyContent:"center" ,
         alignItems:'center', 
    },
    infomationcontainer:{
        flex:0.3,
        marginLeft:30,
        
    },
    buttoncontainer:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:"space-around",
    },
    textcontainer:{
        fontSize:18,
        fontWeight:'bold',
    },
    button:{
        flex:0.4,
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
      textbtn:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        color:"black",
    },
})
