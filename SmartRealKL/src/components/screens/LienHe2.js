import React, { Component } from 'react'
import { Text, View ,StyleSheet } from 'react-native'

export default class LienHe2 extends Component {
    render() {
        return (
            <View style={styles.container}>
               <View style={styles.viewinfo}>
                   <Text style={styles.textheader}>Contract us</Text>
                   <View style={styles.containertextinfor}>
                        <Text style={styles.textinfor}>Phone :0322-364-3356 </Text>
                        <Text style={styles.textinfor}>Email :hotrobatdongsan@gmail.com </Text>
                        <Text style={styles.textinfor}>facebook :facebook.com/hotrobatdongsan </Text>
                        <Text style={styles.textinfor}>zalo :0322-364-3356 </Text>
                   </View>
                  
               </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2C94D',
        justifyContent:"center"
    },
    viewinfo:{
        height:600,
        margin:10,
        backgroundColor:"rgba(255,255,255,0.5)",
        borderRadius:10
    },
    textheader:{
        fontSize:30,
        alignSelf:"center"
    },
    containertextinfor:{
        height:400,
        margin:30
    },
    textinfor:{
        fontSize:20
    }
} )