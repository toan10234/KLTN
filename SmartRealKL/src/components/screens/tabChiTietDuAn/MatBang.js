import React,{ Component } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { connect } from "react-redux";

class MatBang extends Component{
    render(){
        return(
           <View style={{flex:1, backgroundColor:"#F2C94D"}}>
                <View style={styles.headercontainer}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('KhamPha')}>
                       <Icon2 style={styles.iconback} name="back" color='black' size={26}></Icon2>
                   </TouchableOpacity>
                     <View style={{flex:3}}>
                        <Text style={styles.title}> Ground </Text>
                     </View> 
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('XacNhanTT')}>
                       <Icon3 style={styles.iconbook} name="shopping-cart" color='black' size={26}></Icon3>
                   </TouchableOpacity>
               </View>
               
               <View style={{flex:1}}>
                    <Image
                        source={{uri:this.props.hinhAnhMatBang[0].HinhAnhMatNen}}
                        style={{flex:1,marginBottom:10}}
                    >

                    </Image>
                </View>
           
                
           </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer
        
        loading:state.canHoReducers.loading,
        token:state.dangNhapReducers.token,
        admin:state.dangNhapReducers.admin,
        hinhAnhMatBang:state.matBangReducers.hinhAnhMatBang
    }
}
export default connect(mapStatetoProps)(MatBang);
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