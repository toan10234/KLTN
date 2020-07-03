import React,{Component} from 'react';
import { Text,View ,Button,StyleSheet,Image,TouchableOpacity} from 'react-native';

export default class ManHinhBatDau extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
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
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2C94D',
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
        marginTop:15,
        paddingVertical:15,
        borderRadius:5,
        borderWidth: 2,
    },
       btntext:{
        textAlign:'center',
        color:'#F2C94D',
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize:19
    },
    infoContainer:{
        position:'absolute',
        left:7,
        right:7,
        bottom:20,
        height:200,
        padding:10,
     
    },
    title:{
         textAlign:'center',
        color:'red',
        fontStyle: 'italic',
        fontWeight:'bold',
        fontSize:19
    }
} )