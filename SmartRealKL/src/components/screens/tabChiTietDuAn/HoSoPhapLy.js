import React,{ Component } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,ProgressBarAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
//import Pdf from 'react-native-pdf';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
 class HoSoPhapLy extends Component{
    render(){
        return(
           <View style={{flex:1, backgroundColor:"#F2C94D"}}>
                <View style={styles.headercontainer}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('KhamPha')}>
                       <Icon2 style={styles.iconback} name="back" color='black' size={26}></Icon2>
                   </TouchableOpacity>
                     <View style={{flex:3}}>
                        <Text style={styles.title}> Legal records </Text>
                     </View> 
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('XacNhanTT')}>
                       <Icon3 style={styles.iconbook} name="shopping-cart" color='black' size={26}></Icon3>
                   </TouchableOpacity>
               </View>
                <View style={{flex:1}}>
                <WebView 
                    source={{
                    uri: `${this.props.hoso[0].FileHoSo}`
                }}
                style={{ marginTop: 20}}
             />
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
        hoso:state.hoSoPhapLyReducers.hoso
    }
}
export default connect(mapStatetoProps)(HoSoPhapLy)
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
    },
    filepdf:{
        height:500,
        width:300
    }
})
 
                 
        //     <Pdf
        //     //source={{uri:"http://googledrive.com/host/1AtX3nlN154GxE0Zc3DGYq47STXZ082Dj/filePDF/GPXD06.pdf"}}
        //     //https://drive.google.com/file/d/15CrCXeIZ-d2Ae5T0qkYDqq1whkwwttH1
        //     //https://drive.google.com/drive/folders/1AtX3nlN154GxE0Zc3DGYq47STXZ082Dj?usp=sharing
        //     source={require('./../../../assets/data/pdf/GPXD06.pdf')}
        //     onLoadComplete={(numberOfPages,filePath)=>{
        //     console.log(`number of pages: ${numberOfPages}`);
        // }}
        // onPageChanged={(page,numberOfPages)=>{
        //     console.log(`current page: ${page}`);
        // }}
        // onError={(error)=>{
        //     console.log(error);
        // }}
        // onPressLink={(uri)=>{
        //     console.log(`Link presse: ${uri}`)
        // }}
        //     style={styles.filepdf}
        // >

        // </Pdf> 