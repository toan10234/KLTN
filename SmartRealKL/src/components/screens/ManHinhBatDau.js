import React,{Component} from 'react';
import { Text,View ,Button,StyleSheet,Image,TouchableOpacity,ImageBackground} from 'react-native';

export default class ManHinhBatDau extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ImageBackground style={{flex:1}} source={require('../../assets/images/anhNen/anhnen4.jpg')}>
                <View style={styles.container}>
                
                <View style={styles.logocontainer}>
                    <Image style={styles.logo}
                    source={require('./../../assets/images/smart_home_dz.jpg')}/>
                   
                </View>
                <View style={styles.infoContainer}>
                     <TouchableOpacity style={styles.buttoncontainer}
                                onPress={() => this.props.navigation.navigate('DangNhap')}>
                                    <Text style={styles.btntext}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttoncontainer}
                                onPress={() => this.props.navigation.navigate('DangKi')}>
                                    <Text style={styles.btntext}>Sign up</Text>
                        </TouchableOpacity>
                </View>
                
            </View>
            </ImageBackground>
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        //backgroundColor:'#F2C94D',
        flexDirection:'column',
    },
     logocontainer:{
        flex:0.7,
        justifyContent:'center',
        alignItems:'center',
        
    },
     logo:{
        width:330,
        height:260,
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
    },
     buttoncontainer:{
        backgroundColor:'#3C4856',

        borderRadius:7,
        borderWidth:3,
        elevation:5,
        height:55,
        width:170,
        alignItems:"center",
        justifyContent:"center"
    },
       btntext:{
        textAlign:'center',
        color:'#F2C94D',
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize:24
    },
    infoContainer:{
        position:'absolute',
        left:7,
        right:7,
        bottom:20,
        height:150,
        padding:10,
        flexDirection:"row",
        justifyContent:"space-around",
    },
    title:{
         textAlign:'center',
        color:'red',
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize:19
    }
} )