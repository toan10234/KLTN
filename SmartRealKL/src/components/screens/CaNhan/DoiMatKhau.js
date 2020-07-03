import React, { Component } from 'react'
import { Text, View,StyleSheet ,TouchableOpacity,TextInput} from 'react-native'

export default class DoiMatKhau extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containertitle}>
                    <Text style={styles.title}>Change password</Text>
                </View>

                <View style={styles.containerinfomation}>
                 <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>Old password :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter password ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        />
                   </View>
                   <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>New password :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter password ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        />
                   </View>
                   <View style={styles.containerinput}>
                        <Text style={styles.titleinput}>Retype password :</Text>
                        <TextInput style={styles.input}
                        placeholder="Enter password ..."
                        placeholderTextColor='black'
                        autoCorect={false}
                        />
                   </View>
                </View>

                <View style={styles.containerbtn}>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('CaNhan')}>
                        <Text style={styles.textbtn}>Cancel</Text>
                        
                   </TouchableOpacity>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('DangNhap')}>
                        <Text style={styles.textbtn}>Confirm</Text>
                   </TouchableOpacity>
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
        flex:0.65,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
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
    containerinput:{
        flexDirection:'row',
        flex:0.2,
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
    }
})
